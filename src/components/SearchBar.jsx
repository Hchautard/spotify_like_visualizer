import { useState, useEffect } from "react";
import { callApi } from "../services/call-api";
import LoadingCircleSpinner from "../motions/components/loading-circle-spinner";
import { motion } from "motion/react";
import Artist from "../models/artist";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [targetY, setTargetY] = useState(0);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const windowMidHeight = window.innerHeight / 2;
    setTargetY(-(windowMidHeight - 50));
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);

    const res = await callApi(query);

    if (!res || res.artists === null) {
      setIsLoading(false);
      alert("No results found");
    } else if (res.error) {
      setIsLoading(false);
      alert(`Error: ${res.error}`);
    } else {

      setIsLoading(false);
      setHasSearched(true);
      window.dispatchEvent(new CustomEvent("searchComplete"));

      // Construct the Artist object
      const artistData = new Artist({
        strArtist: res.artists[0].strArtist,
        idArtist: res.artists[0].idArtist,
        intBornYear: res.artists[0].intBornYear,
        intDiedYear: res.artists[0].intDiedYear,
        strGenre: res.artists[0].strGenre,
        strCountry: res.artists[0].strCountry,
        strArtistThumb: res.artists[0].strArtistThumb,
      });

      setArtist(artistData);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
      <div style={{ width: "100%" }}>
        <motion.div
            animate={hasSearched ? { y: targetY } : { y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              height: "40px",
            }}
        >
          <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} className="button">
            Search
          </button>
          {isLoading && <LoadingCircleSpinner />}
        </motion.div>

        {artist && (
            <motion.div
                id="presentation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                }}
            >
              {artist.strArtistThumb && (
                  <img
                      src={artist.strArtistThumb}
                      alt={artist.strArtist}
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "1rem",
                      }}
                  />
              )}
              <h2 style={{ margin: "0 0 0.5rem", color: "#111827" }}>
                {artist.strArtist}
              </h2>
              {artist.strGenre && (
                  <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
                    Genre: {artist.strGenre}
                  </p>
              )}
              {artist.strCountry && (
                  <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
                    Country: {artist.strCountry}
                  </p>
              )}
              {artist.intBornYear && (
                  <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
                    Born: {artist.intBornYear}
                    {artist.intDiedYear && ` - Died: ${artist.intDiedYear}`}
                  </p>
              )}
            </motion.div>
        )}
      </div>
  );
}
