const seeMoreBtn = document.querySelector(".body_content_film_btn_seemore");
const descriptionFade = document.querySelector(".body_content_about_description");
const menuBtn = document.querySelector(".header_right_menu_tablet")
const search = document.querySelector(".header_left_input_wrapper")
const login = document.querySelector(".header_right_login")
const loginForm = document.querySelector(".login")
const closeLoginFormBtn = document.querySelector(".login_wrapper_close")
const iconInSearch = document.querySelector('.header_left_input_group_icon')

//remove animation for header icon in search
setTimeout(() => {
    iconInSearch.classList.remove('newbie')
}, 3000)

if(seeMoreBtn && descriptionFade) {
    window.addEventListener("scroll", () => {

        let windowHeight = window.innerHeight;
        let seeMoreTop = seeMoreBtn.getBoundingClientRect().top;
        let descriptionTop = descriptionFade.getBoundingClientRect().top;
        let fadePoint = 150;
        if(seeMoreTop < windowHeight - fadePoint) {
            seeMoreBtn.classList.add("seeMoreScroll");
        }
        console.log(seeMoreTop);
        console.log(descriptionTop);
        console.log(windowHeight - fadePoint);
        if(descriptionTop < windowHeight - fadePoint + 75) {
            console.log(true)
            descriptionFade.classList.add("description_fade");
        }
    })
}

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fade_menu")
    search.classList.toggle("search_fade")
}

login.onclick = () => {
    loginForm.classList.remove("hidden_form")
}

closeLoginFormBtn.onclick = () => {
    loginForm.classList.add("hidden_form")
}

function arrToObj(arr) {
    let obj = {};

    arr.forEach(i => {
        obj = {
            ...obj,
            [i[0]]: i[1]
        }
    })
    return obj;
}