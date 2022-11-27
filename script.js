console.log('hi');

let numberOfFilms = +prompt('How many films have you seen yet');

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('One of the last watched movie?'),
    b = prompt('Rate it'),
    c = prompt('One of the last watched movie?'),
    d = prompt('Rate it');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);