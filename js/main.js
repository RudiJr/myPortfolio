// scroll section active link 
const content = document.querySelectorAll('section, main');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    content.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
};


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

// Modal hover project section
const modalHover = document.querySelectorAll(".swiper-slide");
const modal = document.querySelectorAll(".slide-modal");

modalHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    modal.forEach((item) => {
      item.style.display = "flex";
    });
  });
});

modalHover.forEach((element) => {
  element.addEventListener("mouseout", () => {
    modal.forEach((item) => {
      item.style.display = "none";
    });
  });
});