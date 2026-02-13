interface ArtistBiographies {
    strBiographyEN?: string | null;
    strBiographyDE?: string | null;
    strBiographyFR?: string | null;
    strBiographyCN?: string | null;
    strBiographyIT?: string | null;
    strBiographyJP?: string | null;
    strBiographyRU?: string | null;
    strBiographyES?: string | null;
    strBiographyPT?: string | null;
    strBiographySE?: string | null;
    strBiographyNL?: string | null;
    strBiographyHU?: string | null;
    strBiographyNO?: string | null;
    strBiographyIL?: string | null;
    strBiographyPL?: string | null;
}

interface ArtistImages {
    strArtistThumb?: string | null;
    strArtistLogo?: string | null;
    strArtistCutout?: string | null;
    strArtistClearart?: string | null;
    strArtistWideThumb?: string | null;
    strArtistFanart?: string | null;
    strArtistFanart2?: string | null;
    strArtistFanart3?: string | null;
    strArtistFanart4?: string | null;
    strArtistBanner?: string | null;
}

class Artist {
    idArtist?: string | null;
    strArtist?: string | null;
    strArtistStripped?: string | null;
    strArtistAlternate?: string | null;
    strLabel?: string | null;
    idLabel?: string | null;
    intFormedYear?: number | null;
    intBornYear?: number | null;
    intDiedYear?: number | null;
    strDisbanded?: string | null;
    strStyle?: string | null;
    strGenre?: string | null;
    strMood?: string | null;
    strWebsite?: string | null;
    strFacebook?: string | null;
    strTwitter?: string | null;
    strGender?: string | null;
    intMembers?: number | null;
    strCountry?: string | null;
    strCountryCode?: string | null;
    strMusicBrainzID?: string | null;
    strISNIcode?: string | null;
    strLastFMChart?: string | null;
    intCharted?: number | null;
    strLocked?: string | null;
    biographies?: ArtistBiographies;
    images?: ArtistImages;

    constructor(data: Partial<Artists>) {
        Object.assign(this, data);
        // Initialisation des sous-objets si nécessaire
        if (!this.biographies && data && !this.biographies === undefined) {
            this.biographies = {};
            Object.keys(data).forEach(key => {
                if (key.startsWith('strBiography')) {
                    this.biographies[key as keyof ArtistBiographies] = data[key as keyof Artist] as string;
                }
            });
        }
        if (!this.images && data) {
            this.images = {};
            Object.keys(data).forEach(key => {
                if (key.startsWith('strArtist') && (key.includes('Thumb') || key.includes('Logo') || key.includes('Cutout') || key.includes('Clearart') || key.includes('Fanart') || key.includes('Banner'))) {
                    this.images[key as keyof ArtistImages] = data[key as keyof Artist] as string;
                }
            });
        }
    }
}

export default Artist;
