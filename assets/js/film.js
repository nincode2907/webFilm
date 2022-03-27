import films from "./storageFilms.js"

const navFilms = document.querySelectorAll('.body_content_film_nav_option');
const contentFilm = document.querySelector(".body_content_films")
const seeMore = document.querySelector(".body_content_film_btn_seemore")
var lastFilmIndex = 0

//toogle option
navFilms[0].addEventListener('click', () => {
    navFilms[0].classList.add('active');
    navFilms[1].classList.remove('active');
})

navFilms[1].addEventListener('click', () => {
    navFilms[1].classList.add('active');
    navFilms[0].classList.remove('active');
})


function addThreeFilms(lastFilmIndex) {

    let html = "<div class='row align-items-start mt-1'>";
    for(let i=0;i<3;i++) {
        html += `<div class="col">
            <span class="col_main">
                <img src="${films[lastFilmIndex].img}" alt="film1" class="col_film">
                <div class="col_sub">
                    <button type="button" class="btn btn-outline-warning col_sub_btn">Mua vé</button>
                </div>
            </span>
            <h3 class="col_name">${films[lastFilmIndex].name}</h3>
        </div>`;
        lastFilmIndex +=1;
        console.log(lastFilmIndex);
    }
    html += "</div>";
    let sourceHtml = contentFilm.innerHTML;
    sourceHtml += html;
    contentFilm.innerHTML =sourceHtml;
    console.log(sourceHtml);
}

seeMore.addEventListener("click", () => addThreeFilms(lastFilmIndex))
