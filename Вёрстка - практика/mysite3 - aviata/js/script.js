$(document).on("ready", function () {
  $(".content__slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$("div[name='burgers']").hide();

function valid() {
  $("div[name='burgers']").show();
}

function valid1() {
  $("div[name='burgers']").hide();
}

const heading4 = document.querySelector(".search__choise_button");
console.dir(heading4);

heading4.onclick = () => {
  heading4.style.color = "#000";
  heading4.style.backgroundColor = "#fff";
};
