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

// hover project section
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


// hide/show section when cliked 
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    document.querySelectorAll('main, section:not(:first-of-type)').forEach(section => {
      section.style.display = 'none';
    });

    document.getElementById(target).style.display = 'flex';
  });
});