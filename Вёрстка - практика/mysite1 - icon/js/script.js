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
