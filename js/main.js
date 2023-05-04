// Header > nav 
const menuBtn = document.getElementsByClassName("menu");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    const activeBtn = document.getElementsByClassName("active");
    activeBtn[0].className = activeBtn[0].className.replace(" active", "");
    this.className += " active";
  });
}

// swiper project section
const swiper = new Swiper('.swiper', {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
