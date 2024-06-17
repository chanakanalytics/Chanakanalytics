$(window).on('load', function () {
    $('.loader').fadeOut();
});
AOS.init();
//
//$('ul.navbar-nav li.dropdown').hover(function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
//}, function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
//});


//$('.banner_sldier').owlCarousel({
//    loop: true,
//    items: 1,
//    margin: 30,
//    responsiveClass: true,
//    nav: true,
//    dots: false,
//    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
//    responsive: {
//        0: {
//            items: 1,
//            nav: true
//        },
//        600: {
//            items: 1,
//            nav: false
//        },
//        1000: {
//            items: 1,
//            nav: true,
//            loop: false
//        }
//    }
//})
//



$(".why_slider").slick({
    infinite: true,
    fade: false,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
});

$(".track_slider").slick({
    infinite: false,
    fade: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
});

$(".client_slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: '10px',
    fade: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
});




$(".slider").slick({
    infinite: true,
    fade: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
});

//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

$(".progressBarContainer .progressBar").each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
}

function interval() {
    if (
        $(
            '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
        ).attr("aria-hidden") === "true"
    ) {
        progressBarIndex = $(
            '.slider .slick-track div[aria-hidden="false"]'
        ).data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 5);
        $(".inProgress" + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $(".single-item").slick("slickNext");
            progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }
            startProgressbar();
        }
    }
}

function resetProgressbar() {
    $(".inProgress").css({
        width: 0 + "%"
    });
    clearInterval(tick);
}
startProgressbar();
// End ticking machine

$(".progressBarContainer div").click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $(".single-item").slick("slickGoTo", goToThisIndex, false);
    startProgressbar();
});








// Declare a variable to store the video source
let videoSrc;

// Add click event listener to all elements with class "video-btn"
document.querySelectorAll(".video-btn").forEach((button) => {
    button.addEventListener("click", () => {
        // Get the video source from the data-src attribute
        videoSrc = button.dataset.src;
        console.log(videoSrc);
    });
});

// Add event listener for when the modal is opened
document.getElementById("myModal").addEventListener("shown.bs.modal", () => {
    // Update the video source with autoplay and other options
    document.getElementById("video").src =
        videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
});

// Add event listener for when the modal is closed
document.getElementById("myModal").addEventListener("hide.bs.modal", () => {
    // Stop the video by resetting the source
    document.getElementById("video").src = videoSrc;
});
