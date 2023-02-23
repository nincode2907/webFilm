import films from "./storageFilms.js";

async function run() {
    //kiểm tra xem mảng đã được import chưa rồi mới thực thi lệnh
    while (!films.length) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const navFilms = document.querySelectorAll('.body_content_film_nav_option');
    const contentFilm = document.querySelector(".body_content_films")
    const seeMore = document.querySelector(".body_content_film_btn_seemore")
    var isNow = true;

    const filmsNow = []
    const filmsInFuture = []

    //toogle option
    navFilms[0].addEventListener('click', () => {
        navFilms[0].classList.add('active');
        navFilms[1].classList.remove('active');
        contentFilm.innerHTML = "";
        isNow = true;
        addThreeFilms(filmsNow)
        addThreeFilms(filmsNow)
    })

    navFilms[1].addEventListener('click', () => {
        navFilms[1].classList.add('active');
        navFilms[0].classList.remove('active');
        contentFilm.innerHTML = "";
        isNow = false;
        addThreeFilms(filmsInFuture)
        addThreeFilms(filmsInFuture)
    })

    //tạo hàm thêm vào 3 phim 
    function addThreeFilms(arrayFilms) {

        let html = "<div class='row align-items-start mt-1'>";
        let ranNum;
        for (let i = 0; i < 3; i++) {
            do {
                ranNum = Math.floor(Math.random() * films.length);
            } while (arrayFilms.includes(ranNum));
            arrayFilms.push(ranNum)
            html += `<div class="col-md-4 film col-12 col-sm-12" id="${ranNum}">
            <span class="col_main">
                <img src="./assets/img/films/${films[ranNum].img}.jpg" alt="${films[ranNum].name}" class="col_film">
                <div class="col_sub">
                    <button type="button" class="btn btn-outline-warning col_sub_btn">Mua vé</button>
                </div>
            </span>
            <h3 class="col_name">${films[ranNum].name}</h3>
        </div>`;
        }
        html += "</div>";
        let sourceHtml = contentFilm.innerHTML;
        sourceHtml += html;
        contentFilm.innerHTML = sourceHtml;
        const buys = document.querySelectorAll('.col_sub');
        buys.forEach((buy, index) => {
            buy.onclick = () => {
                let getId = buy.parentElement.parentElement.getAttribute("id")
                window.localStorage.setItem("user", JSON.stringify(getId));
                window.location = "./book.html"
            }
        })
    }

    //bắt sự kiện click vào "see more"
    seeMore.addEventListener("click", () => {
        if (isNow) {
            if (filmsNow.length <= films.length - 3)
                addThreeFilms(filmsNow);
            else alert("Film is over!!")
        }
        else {
            if (filmsInFuture.length <= films.length - 3)
                addThreeFilms(filmsInFuture);
            else alert("Film is over!!")
        }
    })

    addThreeFilms(filmsNow);
    addThreeFilms(filmsNow);

}

run();

