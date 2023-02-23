import films from "./storageFilms.js"

async function run() {
    //kiểm tra xem mảng đã được import chưa rồi mới thực thi lệnh
    while (!films.length) {
        await new Promise((resolve) => setTimeout(resolve, 100))
    }

    const input = document.querySelector(".header_left_input_group_input")
    const resultList = document.querySelector(".header_left_input_group_result_list")

    //tạo mảng tên phim thường ko dấu
    const standardFilmsName = films.map(f => toNonAccentVietnamese(f.name.toLowerCase()));

    //toggle ô search
    input.addEventListener("click", () => {
        resultList.classList.toggle("search_fade")
    })

    //hàm chuẩn hóa bỏ dấu tiếng việt
    function toNonAccentVietnamese(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }

    //lọc phim dựa vào từ khóa
    function filterResult(keyword) {
        const arr = [];
        standardFilmsName.forEach((film, index) => {
            if (film.includes(keyword.toLowerCase().trim()))
                arr.push(index);
        })
        return arr;
    }

    function renderResult(arr) {
        let html = ""
        if(!arr.length) {
            html += '<li class="header_left_input_group_result_item"><a href="#">No matching films...</a></li>'
        }
        else {
            arr.forEach(i => {
                html += `<li class="header_left_input_group_result_item"><a href="#">${films[i].name}</a></li>`
            })
        }
        resultList.innerHTML = html;
    }

    let timer;
    //bắt sự kiện nhập bàn phím khi search, sau 750ms nếu không nhập tiếp thì mới search
    input.addEventListener("input", (e) => {
        clearTimeout(timer);
        iconInSearch.classList.remove('fa-magnifying-glass');
        iconInSearch.classList.add('fa-spinner');
        timer = setTimeout(() => {
            const arr = filterResult(toNonAccentVietnamese(e.target.value.toLowerCase()))
            iconInSearch.classList.remove('fa-spinner');
            iconInSearch.classList.add('fa-magnifying-glass');
            renderResult(arr);
        }, 750);
    });
}

run()