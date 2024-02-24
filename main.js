let forImg = document.querySelectorAll(".slider .content img")
let forNextBtn = document.querySelector(".slider .next")
let forPrevBtn = document.querySelector(".slider .prev")

let counter = 0

forNextBtn.addEventListener("click" ,  showNextImage)  
function showNextImage() {
    forImg[counter].classList.remove('active');
    counter = (counter + 1) % forImg.length; 
    forImg[counter].classList.add('active'); 
  }


  forNextBtn.addEventListener('click', function() {
    if (counter === forImg.length - 1) {
      forImg[counter].classList.remove('active'); 
      counter = 0; 
      forImg[counter].classList.add('active'); 
    }
  });

forPrevBtn.addEventListener("click" , function () {
    forImg[counter].classList.remove('active');
    counter = (counter - 1 + forImg.length) % forImg.length; 
    forImg[counter].classList.add('active'); 
})
  
// let index = 0
// function nextBtn (n) {
//     forImg[counter].classList.remove("active")
//     // if (counter.length = forImg.length) {
//     //     counter = 1
//     // }
 
//     // if (forImg[counter].length ) {
//     //     counter = 0
//     // }

//     counter++
    
//     if (counter === forImg.length - 0) {
//         forImg[index].classList.remove('active'); // Oxirgi rasmni olib tashlash
//         index++
//       index = 0; // Birinchi rasmni ko'rsatish uchun indeksni nolga sozlash
//       forImg[index].classList.add('active'); // Birinchi rasmni korsatish
        
//     }
//     forImg[counter].classList.add("active")  
    
// }



// forPrevBtn.addEventListener("click" , prevBtn)

// function prevBtn () {
//     forImg[counter].classList.remove("active")
//     if (counter === 0) {
//         counter = 4
//     }
//     counter--
//     forImg[counter].classList.add("active")
// }

// console.log(forPrevBtn);


