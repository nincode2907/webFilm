const seeMoreBtn = document.querySelector(".body_content_film_btn_seemore");
const descriptionFade = document.querySelector(".body_content_about_description");


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if(value >= 880) {
        seeMoreBtn.classList.add("seeMoreScroll");
        descriptionFade.classList.add("description_fade");
    }
})