const menu = document.getElementById("navbar");
const menuBtn = document.getElementsByClassName("menu");

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", function() {
      const activeBtn = document.getElementsByClassName("active");
      activeBtn[0].className = activeBtn[0].className.replace(" active", "");
      this.className += " active";
    });
  }