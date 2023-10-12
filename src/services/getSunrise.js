export async function getSunrise(lat, long) {
  const api = "https://api.sunrise-sunset.org/json?";
  let data = await fetch(`${api}+lat=${lat}&lng=${long}`);
  let rawData = await data.json();
  return rawData.results;

}
