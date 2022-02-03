const headerBtn = document.getElementsByClassName("header__link")[0];
window.addEventListener("scroll", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 1300) {
    headerBtn.classList.add("red");
    console.log(scrollPos);
  } else {
    headerBtn.classList.remove("red");
  }
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
