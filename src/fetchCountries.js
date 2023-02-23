const URL_COUNTRIES = 'https://restcountries.com/v2/';

export function fetchCountries(country) {
  return fetch(
    `${URL_COUNTRIES}/name/${country}?fields=capital,population,flags,languages,name`
  ).then(response => {
    return response.json();
  });
}
