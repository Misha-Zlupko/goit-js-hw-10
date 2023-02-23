import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { countriiesMurkup, countriMarkupList } from './markCountries';
const inputEl = document.querySelector('#search-box');
const countryConteiner = document.querySelector('.country-info');
const countryConteinerList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(serachInput, DEBOUNCE_DELAY));

function serachInput(evt) {
  const serchRequest = evt.target.value;

  if (!serchRequest) {
    return;
  }

  fetchCountries(serchRequest).then(data => {
    countryConteiner.innerHTML = '';
    countryConteinerList.innerHTML = '';

    if (data.status === 404) {
      return Notify.failure('"Oops, there is no country with that name"');
    }

    if (data.length === 1) {
      return countriiesMurkup(data, countryConteiner);
    }
    if (data.length > 10) {
      return Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    }
    countriMarkupList(data, countryConteinerList);
  });
}
