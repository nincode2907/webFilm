const filmName = document.querySelector(".film-name")
const filmContent = document.querySelector(".film-content")
const movieApi = 'http://localhost:3000/movies'

fetch(movieApi)
    .then(response => response.json())
    .then(data => renderContentFilm(data[0]))

function renderContentFilm(data){
     filmName.innerHTML = data.name
     filmContent.innerHTML = data.content
}