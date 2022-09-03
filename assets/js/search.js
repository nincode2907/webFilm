import films from "./storageFilms.js"

const input = document.querySelector(".header_left_input_group_input")
const resultList = document.querySelector(".header_left_input_group_result_list")

const standardFilmsName = films.map(f => toNonAccentVietnamese(f.name.toLowerCase()));

input.addEventListener("click", () => {
    resultList.classList.toggle("search_fade")
})

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

function filterResult(keyword) {
    const arr = [];
    standardFilmsName.forEach((film, index) => {
        if (film.includes(keyword.toLowerCase().trim())) arr.push(index);
    })
    console.log(arr);
    return arr;
}

function renderResult(arr) {
    let html = ""
    arr.forEach(i => {
        html += `<li class="header_left_input_group_result_item"><a href="#">${films[i].name}</a></li>`
    })
    resultList.innerHTML = html;
}

input.addEventListener("input", (e) => {
    const arr = filterResult(toNonAccentVietnamese(e.target.value.toLowerCase()))
    renderResult(arr)
}
)  