/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Аполлон 13",
  ],
};

const ads = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  films = document.querySelectorAll(".promo__interactive-item"),
  movieList = document.querySelector(".promo__interactive-list"),
  filmInput = document.querySelector(".adding__input"),
  filmAddBtn = document.querySelector(".add button"),
  filmRemoveBtns = document.querySelectorAll(".delete");

ads.forEach((item) => {
  item.remove();
});

genre.textContent = "Драма";

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
    `;
});

filmAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addingFilm = filmInput.value;
  if (addingFilm.length > 21) {
    addingFilm = `${addingFilm.slice(0, 21)}...`;
  }
  if (addingFilm != "" && addingFilm != null) {
    movieDB.movies.push(filmInput.value);
    console.log(movieDB.movies);
    movieDB.movies.sort();
    movieList.innerHTML += `
    <li class="promo__interactive-item">${movieDB.movies.length}: ${addingFilm}
            <div class="delete"></div>
    </li>
    `;
    filmInput.value = "";
  }
});
console.log(filmRemoveBtns);
// filmRemoveBtns.forEach((btn, i) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(`click on btn ${i}`);
//     console.log(e.target);
//   });
// });

// filmRemoveBtns[0].addEventListener("click", (e) => {
//   e.preventDefault;
//   console.log("Click");
// });
