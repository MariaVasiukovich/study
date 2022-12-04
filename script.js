"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you seen yet');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('How many films have you seen yet');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememderFilms() {
    for (let i = 0; i < 2; i++) {

        let lastMovie = prompt('One of the last watched movie?');
    
        if ( lastMovie.length == 0 && lastMovie.length > 50 && lastMovie == null ) {
            lastMovie = prompt('One of the last watched movie?');
        }
    
        let ratingMovie = prompt('Rate it');
    
        personalMovieDB.movies[lastMovie] = ratingMovie;
    }
}

rememderFilms();

function detectFilmLevel() {
    if ( personalMovieDB.count < 10 ) {
        alert (`You've seen too little films`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert (`You're a classic watcher`);
    } else if (personalMovieDB.count >= 30 ){
        alert (`You OK`);
    } else {
        alert (`Error`);
    }
}

detectFilmLevel();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenders() {
    for( let i = 0; i<3; i++ ) {
        const genre = prompt(`Your favourite genre under the number ${i+1}`);
        personalMovieDB.genres[i] = genre;
       // personalMovieDB.genres[i] = prompt(`Your favourite genre under the number ${i+1}`);
    }
}

writeYourGenders();