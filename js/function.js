document.addEventListener("DOMContentLoaded", function () {
  function closeLoaderAfterDelay() {
    setTimeout(function () {
      var loader = document.querySelector(".loaderWrapper");
      if (loader) {
        loader.style.display = "none";
      }
    }, 2000);
  }

  closeLoaderAfterDelay();
});

$(window).on("load", function () {
  if ($(".loaderWrapper").is(":visible")) {
    $("body").addClass("remove-scrolling");
    $(".loaderWrapper")
      .delay(2000)
      .fadeOut("slow", function () {
        $("body").removeClass("remove-scrolling");
      });
  }
});


  $(".siteHeader__openbtn").click(function () {
    $(this).toggleClass("active");
    $(".siteHeader__spNav").toggleClass("active");
    $(".siteHeader__spNav-wrapper").toggleClass("active");
  });
  $(".siteHeader a").click(function () {
    $(this).removeClass("active");
    $(".siteHeader__spNav").removeClass("active");
    $(".siteHeader__spNav-wrapper").removeClass("active");
    $(".siteHeader__openbtn").removeClass("active");
  });



  var cursor = $("#cursor");
  var stalker = $("#stalker");
  $(document).on("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.css({
      opacity: "0.9",
      top: y + "px",
      left: x + "px",
    });
    setTimeout(function () {
      stalker.css({
        opacity: "0.4",
        top: y + "px",
        left: x + "px",
      });
    }, 140);
  });

  $("a").on({
    mouseenter: function () {
      cursor.addClass("active");
      stalker.addClass("active");
    },
    mouseleave: function () {
      cursor.removeClass("active");
      stalker.removeClass("active");
    },
  });



  var headerHeight = $("header").outerHeight();
  $('a[href^="#"]').click(function () {
    if ($(this).hasClass("disable-scroll")) {
      return true; 
    }
  
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $("body,html").stop().animate({ scrollTop: position }, 900);
    return false;
  });

  


  const addAnimateClassOnScroll = (selector) => {
    window.addEventListener("scroll", function () {
      const element = document.querySelector(selector);
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight * 0.55) {
        element.classList.add("animate");
      }
    });
  };

  addAnimateClassOnScroll(".sec01");
  addAnimateClassOnScroll(".sec05__contactWrapper");

  $(function () {
    $(".modaal-btn").modaal({});
  });



  document.addEventListener("DOMContentLoaded", function() {
    const toTopLinks = document.querySelectorAll('.arrow__toTop');

    toTopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const arrow = document.querySelector('.arrow');

  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > window.innerHeight) {
          arrow.classList.add('active'); 
      } else {
          arrow.classList.remove('active'); 
      }
      
    });
});

