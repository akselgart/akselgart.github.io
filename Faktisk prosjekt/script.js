let burgerEl = document.querySelector('.fa-bars')
let navEl = document.querySelector('nav')

burgerEl.addEventListener('click', showNav)

function showNav(){
    navEl.classList.toggle('show')
}

let headerEl = document.querySelector('header')

window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 500){
        headerEl.classList.remove("skjul");
    } else{
        headerEl.classList.add("skjul");
    }
})

let kort1 = document.querySelector(".kort1");

window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 550){
        kort1.classList.add("active");
    } /* else{
        kort1.classList.remove("active");
    } */

})

/* window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 1000 ){
        kort1.classList.remove("active");
    }
}) */

let kort2 = document.querySelector(".kort2");

window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 1300 ){
        kort2.classList.add("active");
    } /* else{
        kort2.classList.remove("active");
    } */

})
/* window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 1750 ){
        kort1.classList.remove("active");
    }
}) */

let kort3 = document.querySelector(".kort3");

window.addEventListener("scroll", ( ) =>{
    if (window.pageYOffset  > 2000){
        kort3.classList.add("active");
    } /* else{
        kort1.classList.remove("active");
    } */
})