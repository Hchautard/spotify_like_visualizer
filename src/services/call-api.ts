const apiKey = import.meta.env.PUBLIC_API_KEY;

export async function callApi(artistName: string) {
  // const url = `https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistName}`;

  const free_url = `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artistName}`;
  const response = await fetch(free_url);
  return await response.json();
}
