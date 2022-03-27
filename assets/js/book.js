import films from "./storageFilms.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelectorAll(".list-film")
const filmBooked = document.querySelector(".film-booked")
const poster = document.querySelector(".poster")
const nameFilm = document.querySelector(".name-film")

listFilms.forEach(film => film.src = films[user].img)
filmBooked.src = films[user].img
poster.src = films[user].img
nameFilm.innerHTML = films[user].name