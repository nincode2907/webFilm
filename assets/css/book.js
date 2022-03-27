const seats = document.getElementsByClassName('seat')
const seat = document.getElementsByClassName('seat-empty')
const buyBtn = document.querySelector('.buy-btn')
const quantity = document.querySelector('.display')
const inc =document.querySelector('.up')
const dec = document.querySelector('.down')
const bill = document.querySelector('.contain-bill')
const priceFilms = document.querySelectorAll('.price')
const priceCore = document.querySelectorAll('.price-core')

var price = [90000, 150000]
var i = 0
var seatAll = document.querySelector('.seat-all')
var dem = 0 
window.addEventListener('load', function () {
    var i = 1
    for (i; i < 60; i++) {
        seatAll.innerHTML += `<div class="seat col-lg-1">
        <label class="seat-empty" for="${i + 1}">${i + 1}</label>
        <input type="checkbox" name="" id="${i + 1}">
        </div>`
    }

    for (const ASeat of seat) {
        ASeat.addEventListener('click', function () {
            ASeat.classList.toggle('check')
        })
    }
    bill.style.display = "none"
    buyBtn.addEventListener('click', function () {
        for (const ASeat of seat) {
            if (ASeat.classList.contains('check')) {
                ASeat.innerHTML = "X"
                dem++
            }
        }
       
        console.log (dem)
        if(dem > 0){
            bill.style.display = "flex"
            quantity.innerHTML = dem 
        
        }else {
            bill.style.display = "none"
        }
        for (const priceFilm of priceFilms) {
            if (getDay == 0 || getDay == 6) {
                priceFilm.innerHTML = (price[1] *quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
            else {
                priceFilm.innerHTML = (price[2] *quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            }
        }
    })

// price


var d = new Date()
var getDay = d.getDay()
for (const priceC of priceCore) {
    if (getDay == 0 || getDay == 6) {
        priceC.innerHTML = price[1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    else {
        priceC.innerHTML = price[2].toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }

}

// quantity

inc.addEventListener('click', function() {
    quantity.innerHTML = ++i
    for (const priceFilm of priceFilms) {
        if (getDay == 0 || getDay == 6) {
            priceFilm.innerHTML = (price[1] *quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
        else {
            priceFilm.innerHTML = (price[2] *quantity.innerHTML).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
    }
})
dec.addEventListener('click', function() {
    quantity.innerHTML = --i
    if (i < 0){
        quantity.innerHTML = 0 
    }
    for (const priceFilm of priceFilms) {
        if (getDay == 0 || getDay == 6) {
            priceFilm.innerHTML = (price[1] / i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
        else {
            priceFilm.innerHTML = (price[2] / i).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
    
    }
})

})
