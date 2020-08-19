// "use strict";


const numberOfFilms = +prompt("Сколько фильмов уже посмотрели", "");

// console.log(numberOfFilms);

let personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


const latestFilm = prompt("Один из последних просмотренных фильмов?", ""),
  filmRate = prompt("На сколько оцените его?", ""),
  latestFilm_2 = prompt("Один из последних просмотренных фильмов?", ""),
  filmRate_2 = prompt("На сколько оцените его?", "");

let movies = {
  movies: {

  }
}


personalMoviesDB.movies[latestFilm] = filmRate;
personalMoviesDB.movies[latestFilm_2] = filmRate_2;



console.log(personalMoviesDB);
console.log(personalMoviesDB.movies['latestFilm']);