let forImg = document.querySelectorAll(".slider .content img")
let forNextBtn = document.querySelector(".slider .next")
let forPrevBtn = document.querySelector(".slider .prev")
let callingLi = document.querySelectorAll(".slider .btns .dots .dot")
let counter = 0
  
// let index = 0

forNextBtn.addEventListener("click" , nextBtn)
function nextBtn () {
    forImg[counter].classList.remove("active")
    dots[counter].classList.remove("active")
    counter++
    if (counter === forImg.length) {
        counter = 0
    }
    dots[counter].classList.add("active")
    forImg[counter].classList.add("active")  


    // callingLi[counter].classList.remove("active")
    // counter++
    // callingLi[counter].classList.add("active")
    
}



forPrevBtn.addEventListener("click" , prevBtn)

function prevBtn () {
    forImg[counter].classList.remove("active")
    dots[counter].classList.remove("active")
    if (counter === 0) {
        counter = forImg.length
    }
    counter--
    dots[counter].classList.add("active")
    forImg[counter].classList.add("active")
}

console.log(forPrevBtn);


