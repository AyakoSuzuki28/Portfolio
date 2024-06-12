// loading

window.onload = function () {
  setTimeout(function () {
    document.getElementById("splash").style.transition = "slow";
    document.getElementById("splash").style.display = "none";
  }, 1500);

  setTimeout(function () {
    document.getElementById("splash_logo").style.transition = "slow";
    document.getElementById("splash_logo").style.opacity = 0;
  }, 1200);
};

// slider
$(".slider").slick({
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
  nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6900,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
  dots: false,
  customPaging: function (slider, i) {
    return i === 0 || i === 1
      ? '<button type="button" role="button" tabindex="0" class="slick-dot"></button>'
      : "";
  },
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100,
          },
          500
        );
    }
  });
});
