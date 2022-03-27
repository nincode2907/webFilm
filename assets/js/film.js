import films from "./storageFilms.js"

const navFilms = document.querySelectorAll('.body_content_film_nav_option');
const contentFilm = document.querySelector(".body_content_films")
const seeMore = document.querySelector(".body_content_film_btn_seemore")
var lastFilmIndex = 0;
var cong = 1;

//toogle option
navFilms[0].addEventListener('click', () => {
    navFilms[0].classList.add('active');
    navFilms[1].classList.remove('active');
    contentFilm.innerHTML ="";
    lastFilmIndex = 0;
    addThreeFilms(lastFilmIndex, 1)
    addThreeFilms(lastFilmIndex, 1)
    cong = 1;
})

navFilms[1].addEventListener('click', () => {
    navFilms[1].classList.add('active');
    navFilms[0].classList.remove('active');
    contentFilm.innerHTML ="";
    lastFilmIndex = 11;
    addThreeFilms(lastFilmIndex, -1)
    addThreeFilms(lastFilmIndex, -1)
    cong = -1;
})


function addThreeFilms(indexFilms, plus) {

    let html = "<div class='row align-items-start mt-1'>";
    for(let i=0;i<3;i++) {
        html += `<div class="col film">
            <span class="col_main">
                <img src="${films[indexFilms].img}" alt="film1" class="col_film">
                <div class="col_sub">
                    <button type="button" class="btn btn-outline-warning col_sub_btn">Mua vé</button>
                </div>
            </span>
            <h3 class="col_name">${films[indexFilms].name}</h3>
        </div>`;
        indexFilms += 1 * plus;
    }
    html += "</div>";
    let sourceHtml = contentFilm.innerHTML;
    sourceHtml += html;
    contentFilm.innerHTML =sourceHtml;
    lastFilmIndex = indexFilms;
}

addThreeFilms(lastFilmIndex, 1)
addThreeFilms(lastFilmIndex, 1)
seeMore.addEventListener("click", () => {
    if(cong === 1) {
        if(lastFilmIndex <= films.length -3)
            addThreeFilms(lastFilmIndex,cong);
        else console.log("Film is over!!")
    }
    else {
        if(lastFilmIndex >= 2)
            addThreeFilms(lastFilmIndex,cong);
        else console.log("Film is over!!")
    }
})
