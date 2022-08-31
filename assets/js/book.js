import films from "./storageFilms.js"

const user = window.localStorage.getItem('user');
const listFilms = document.querySelector(".list-film")
const nameFilm = document.querySelector(".film-name")
const contentFilm =document.querySelector(".film-content")

window.addEventListener("load", function(){
    listFilms.setAttribute("src", `./assets/img/films/${films[JSON.parse(user) ].img}.jpg`)
    nameFilm.innerText = films[JSON.parse(user) ].name
    contentFilm.innerText = films[JSON.parse(user)].content
})

console.log(JSON.parse(user));