// toggle navbar icon 
const nav = document.querySelector('.navbar'); 
const navIcon = document.querySelector('#menu-icon');

navIcon.onclick = () => {
  navIcon.classList.toggle('bx-x');
  nav.classList.toggle('active');
};

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

    // remove toggled icon and navbar when click nav link
    navIcon.classList.remove('bx-x');
    nav.classList.remove('active');
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

// scroll reveal 
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.profile-content, .title', { origin: 'top' });
ScrollReveal().reveal('.profile-img', { origin: 'bottom' });
ScrollReveal().reveal('.profile-content h1', { origin: 'left' });
ScrollReveal().reveal('.profile-content p, .about-content', { origin: 'right' });

// typed js 
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});