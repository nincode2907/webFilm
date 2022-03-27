import films from "./storageFilms.js"

const input = document.querySelector(".header_left_input_group_input")
const resultList = document.querySelector(".header_left_input_group_result_list")

input.addEventListener("click", () => {
    resultList.classList.toggle("search_fade")
})

function filterResult(keyword) {
    const arr = films.filter((film)=> {
        return film.name.includes(keyword.toUpperCase())
    })
    return arr;
}

function renderResult(arr) {
    let html = ""
    arr.forEach((ar,index) => {
        html+=`<li class="header_left_input_group_result_item">${ar.name}</li>`
    })
    resultList.innerHTML = html;
}

input.addEventListener("input",(e) => {
        const arr = filterResult(e.target.value)
        renderResult(arr)
    }
)  