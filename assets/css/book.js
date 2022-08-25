const filmName = document.querySelector(".film-name")
const filmContent = document.querySelector(".film-content")
const movieApi = 'http://localhost:3000/movies'

window.addEventListener("load", function(){
    fetch(movieApi)
        .then(response => response.json())
        .then(data => renderContentFilm(data[0]))
    
    function renderContentFilm(data){
         filmName.innerHTML = data.name
         filmContent.innerHTML = data.content
    }
})

// Để xem thì cài json server và chạy lệnh 
// json-server db.json -w 

// Book tickets
const bookDate = document.querySelector(".bookk-date")
const bookTime = document.querySelector(".book-time")
const priceToday = document.querySelector(".price-today")
const cinema = document.querySelector(".cinema")
const chooseSeat = document.querySelector(".choose-seat")

var d = new Date()
console.log(d.getUTCDay());