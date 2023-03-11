import films from "./storageFilms.js";

async function run() {
    const contentFilm = document.querySelector(".body_content_films")

    //kiểm tra xem mảng đã được import chưa rồi mới thực thi lệnh
    let timeNeedToOut = 4000,timeCount=0;
    while (!films.length) {
        timeCount += 100;
        if(timeCount >= timeNeedToOut) 
        {
            contentFilm.innerHTML = "Check your internet or server not found";
            contentFilm.style.fontSize = 28 + "px";
            contentFilm.style.color = "#dd2c00";
            return ;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const navFilms = document.querySelectorAll('.body_content_film_nav_option');
    const seeMore = document.querySelector(".body_content_film_btn_seemore")
    var isNow = true;
    var cache = '';
    var isVisitedFilmsInFuture = false;

    const filmsNow = []
    const filmsInFuture = []

    //navFilms[0] là tab phim đang chiếu
    navFilms[0].addEventListener('click', () => {
        navFilms[0].classList.add('active');
        navFilms[1].classList.remove('active');

        //luu lai bang bien cache
        let tmp = contentFilm.innerHTML;
        contentFilm.innerHTML = cache;
        cache = tmp;
        isNow = true;
    })

    //navFilms[0] là tab phim sắp chiếu
    navFilms[1].addEventListener('click', () => {
        navFilms[1].classList.add('active');
        navFilms[0].classList.remove('active');

        //lưu lai bang bien cache
        let tmp = contentFilm.innerHTML;
        contentFilm.innerHTML = cache;
        cache = tmp;
        isNow = false;

        //nếu là lần đầu qua phim sắp chiếu thì thêm 6 phim, lần sau lấy lại cache
        if (!isVisitedFilmsInFuture) {
            addThreeFilms(filmsInFuture)
            addThreeFilms(filmsInFuture)
            isVisitedFilmsInFuture = true;
        }
    })

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

    function addThreeFilms(arrayFilms) {
        let ranNum;

        //tạo element div 
        let newRow = document.createElement('div');
        newRow.classList.add('row', 'mt-1', 'align-items-start');
        contentFilm.appendChild(newRow);
        for (let i = 0; i < 3; i++) {

            //thêm từng phim lần lượt
            setTimeout(() => {
                //random film and push index into array film
                do {
                    ranNum = Math.floor(Math.random() * films.length);
                } while (arrayFilms.includes(ranNum));
                arrayFilms.push(ranNum);

                let newFilms = document.createElement('div');
                newFilms.classList.add('col-md-4', 'film', 'col-sm-12', 'col-12');
                newFilms.setAttribute("id", ranNum);

                let newSpan = document.createElement('span');
                newSpan.classList.add('col_main');
                newSpan.innerHTML = `<img src="${films[ranNum].img}" alt="${films[ranNum].name}" class="col_film">
            <div class="col_sub buy">
                <a href="./book.html?id=${films[ranNum].id}" class="btn btn-outline-warning col_sub_btn">Mua vé</a>
            </div>`;

                let newH3 = document.createElement('h3');
                newH3.classList.add('col_name');
                newH3.innerHTML = films[ranNum].name;

                newFilms.appendChild(newSpan);
                newFilms.appendChild(newH3);
                newRow.appendChild(newFilms);
            }, 500 * i);
        }
    }

    addThreeFilms(filmsNow);
    addThreeFilms(filmsNow);
}

run();