'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
// 1.Create a function 'myLocation' which gives us owr current location(latitude and longititude).
// 2.Create a fnction 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 3. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. 
// The AJAX call will be done to a URL with this format: https://geocode.xyz/{lat},{lng}?geoit=json&auth={API_KEY}. Use the fetch API(along with some other method will be a plus point) and promises to get the data. 
// 4. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in varanasi, India'
// 5. Chain a .catch method to the end of the promise chain and log errors to the console
// 6. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
// 7. And you have a 'renderCountry' function that will take object(NOT array) and will Add UI for given Data ,so you don't have to do it manually, just call the function.
// helopful apis :-
// https://restcountries.com/v3.1/name/India // for getting country info from country name
// https://restcountries.com/v3.1/alpha/IN // for getting country info from country name
