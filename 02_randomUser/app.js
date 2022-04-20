//Happy holi

import displayUser from './utils/displayUser.js'
import getUser from './utils/fetchUser.js'
import getElement from './utils/getElement.js'
import remove from './utils/removeActive.js'

// const img = get('.user-img');
// const title = get('.user-title');
// const value = get('.user-value');
// const btns = [...document.querySelectorAll('.icon')];

const showUser = async () => {
    const person = await getUser();
    displayUser(person);
  };
// displayUser();
// const displayUser = (person) => {
//     img.src = person.image;
//     value.textContent = person.name;
//     title.textContent = `My name is`;
//     removeActive(btns);
//     btns[0].classList.remove('active');
//     btns.forEach((btn) => {
//     // btn.dataset.title = person[label];
//       const label = btn.dataset.label;
    
    
//       btns.forEach((btn) => {
//         const label = btn.dataset.label;
//         btn.addEventListener('click', () => {
//           title.textContent = `My ${label} is`;
//           value.textContent = person[label];
//           removeActive(btns);
//           btn.classList.add('active');
//         });
//       });
//     });
// }

window.addEventListener("DOMContentLoaded", showUser);
document.getElementById("btn").addEventListener("click", showUser);
