export const countriiesMurkup = (data, element) => {
  console.log(data);
  const markup = data
    .map(
      el =>
        `<div>
      <p>Countru:${el.name}</p>
      <p>Capital:${el.capital}</p>
      <p>Population:${el.population}</p>
      <p>Languag:${el.languages.map(({ name }) => name)}</p>
      <img src="${el.flags.svg}" width="50px" height='50px'/>
      </div>`
    )
    .join('');
  element.insertAdjacentHTML('beforeend', markup);
};

export const countriMarkupList = (data, element) => {
  const markupList = data
    .map(
      el =>
        `<li><img src='${el.flags.svg}' width = "40px" height="40px" alt = "${el.name}"/> <p>${el.name}</p></li>`
    )
    .join('');
  element.insertAdjacentHTML('beforeend', markupList);
};
