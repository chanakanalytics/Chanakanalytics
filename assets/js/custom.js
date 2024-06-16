$(document).ready(function () {
    // header sticky animation 
    $(function () {
        var header = $("#headerScroll");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                header.removeClass('header').addClass("header-scroll");
            } else {
                header.removeClass("header-scroll").addClass('header');
            }
        });
    });

    // Header ProgressBar
    function progressBarScroll() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-bar").style.width = scrolled + "%";
    }
    window.onscroll = function () {
        progressBarScroll();
    };


    // Circle Button Progress Bar
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 900;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });

    // 
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('active-one');
    });
    // Toggle Active Class On Click
    $("#thisTgglCls a").click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    });
    // filter toggle js
    $(".min-filter").click(function () {
        $(".tab-side").slideToggle();
    });
    // 

    // --- this section will be changed (start) --- //

    // this code remove ----- $('.dropdown-toggle').click(function() { 
    // 	$(this).next('.dropdown-menu').slideToggle(500);
    //});

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    // --- this is end --- //


    // 
    $('#clientsLogo').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                }
		  },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
		  },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
		  }
		]
    });
    $('#clientsLogo2').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                }
		  },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
		  },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
		  }
		]
    });
    // Home page banner slider
    $('#homeSlider').slick({
        dots: true,
        infinite: true,
    });
    // blog banner slider
    $('.blog-banner-slider').slick({
        dots: true,
        infinite: true,
    });
    // 
    $('#testimonialSlider').slick({
        dots: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1,
                }
			},
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                }
			}
		  ]
    });
    // trusted companies (case studies silder)
    $('#trustedCmpSlider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                }
		  },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
		  },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
		  },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
		  }
		]
    });
    // footer slider
    $('#multiLogo').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                }
		  },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
		  },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
		  }
		]
    });

    // client slider
    $('#clientSlider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,

    });

    //  Get a project quote range script
    var $range = $(".js-range-slider"),
        $from = $(".from"),
        $to = $(".to"),
        range,
        min = $range.data('min'),
        max = $range.data('max'),
        from,
        to;
    var updateValues = function () {
        $from.prop("value", from);
        $to.prop("value", to);
    };
    $range.ionRangeSlider({
        onChange: function (data) {
            from = data.from;
            to = data.to;
            updateValues();
        }
    });
    range = $range.data("ionRangeSlider");
    var updateRange = function () {
        range.update({
            from: from,
            to: to
        });
    };
    $from.on("input", function () {
        from = +$(this).prop("value");
        if (from < min) {
            from = min;
        }
        if (from > to) {
            from = to;
        }
        updateValues();
        updateRange();
    });
    $to.on("input", function () {
        to = +$(this).prop("value");
        if (to > max) {
            to = max;
        }
        if (to < from) {
            to = from;
        }
        updateValues();
        updateRange();
    });
    // nav tab script
    // step1
    var btn = document.querySelector("#nextTwo");
    btn.addEventListener("click", method1);
    btn.addEventListener("click", method2);
    btn.addEventListener("click", method3);
    btn.addEventListener("click", method4);
    btn.addEventListener("click", method5);
    btn.addEventListener("click", method6);

    function method1() {
        var a = document.getElementById("step2");
        a.classList.add("active");
    };

    function method2() {
        var a = document.getElementById("step2");
        a.classList.add("show");
    };

    function method3() {
        var a = document.getElementById("step1");
        a.classList.remove("active");
    };

    function method4() {
        var a = document.getElementById("step1");
        a.classList.remove("show");
    };

    function method5() {
        var a = document.getElementById("step1-tab");
        a.classList.add("done");
    };

    function method6() {
        var a = document.getElementById("step2-tab");
        a.classList.add("active");
    };
    // step2
    var btn = document.querySelector("#nextThree");
    btn.addEventListener("click", method7);
    btn.addEventListener("click", method8);
    btn.addEventListener("click", method9);
    btn.addEventListener("click", method10);
    btn.addEventListener("click", method11);
    btn.addEventListener("click", method12);

    function method7() {
        var a = document.getElementById("step3");
        a.classList.add("active");
    };

    function method8() {
        var a = document.getElementById("step3");
        a.classList.add("show");
    };

    function method9() {
        var a = document.getElementById("step2");
        a.classList.remove("active");
    };

    function method10() {
        var a = document.getElementById("step2");
        a.classList.remove("show");
    };

    function method11() {
        var a = document.getElementById("step2-tab");
        a.classList.add("done");
    };

    function method12() {
        var a = document.getElementById("step3-tab");
        a.classList.add("active");
    };
    // step3
    var btn = document.querySelector("#nextFour");
    btn.addEventListener("click", method13);
    btn.addEventListener("click", method14);
    btn.addEventListener("click", method15);
    btn.addEventListener("click", method16);
    btn.addEventListener("click", method17);
    btn.addEventListener("click", method18);

    function method13() {
        var a = document.getElementById("step4");
        a.classList.add("active");
    };

    function method14() {
        var a = document.getElementById("step4");
        a.classList.add("show");
    };

    function method15() {
        var a = document.getElementById("step3");
        a.classList.remove("active");
    };

    function method16() {
        var a = document.getElementById("step3");
        a.classList.remove("show");
    };

    function method17() {
        var a = document.getElementById("step4-tab");
        a.classList.add("done");
    };

    function method18() {
        var a = document.getElementById("step3-tab");
        a.classList.add("done");
    };
    // prev2
    var btn = document.querySelector("#prevTwo");
    btn.addEventListener("click", method19);
    btn.addEventListener("click", method20);
    btn.addEventListener("click", method21);
    btn.addEventListener("click", method22);
    btn.addEventListener("click", method23);
    btn.addEventListener("click", method24);

    function method19() {
        var a = document.getElementById("step2");
        a.classList.add("active");
    };

    function method20() {
        var a = document.getElementById("step2");
        a.classList.add("show");
    };

    function method21() {
        var a = document.getElementById("step3");
        a.classList.remove("active");
    };

    function method22() {
        var a = document.getElementById("step3");
        a.classList.remove("show");
    };

    function method23() {
        var a = document.getElementById("step3-tab");
        a.classList.remove("active");
    };

    function method24() {
        var a = document.getElementById("step2-tab");
        a.classList.remove("done");
    };
    // prev1
    var btn = document.querySelector("#prevOne");
    btn.addEventListener("click", method25);
    btn.addEventListener("click", method26);
    btn.addEventListener("click", method27);
    btn.addEventListener("click", method28);
    btn.addEventListener("click", method29);
    btn.addEventListener("click", method30);

    function method25() {
        var a = document.getElementById("step1");
        a.classList.add("active");
    };

    function method26() {
        var a = document.getElementById("step1");
        a.classList.add("show");
    };

    function method27() {
        var a = document.getElementById("step2");
        a.classList.remove("active");
    };

    function method28() {
        var a = document.getElementById("step2");
        a.classList.remove("show");
    };

    function method29() {
        var a = document.getElementById("step2-tab");
        a.classList.remove("active");
    };

    function method30() {
        var a = document.getElementById("step1-tab");
        a.classList.remove("done");
    };
    $("#nextFour").click(function () {
        $(".check-icon").hide();
        setTimeout(function () {
            $(".check-icon").show();
        }, 10);
    });

});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("uploadCV").addEventListener("change", showUploadCV);
    document.getElementById("uploadCVLink").addEventListener("change", showUploadCVLink);
    document.getElementById("uploadPortfolio").addEventListener("change", showUploadPortfolio);
    document.getElementById("uploadPortfolioLink").addEventListener("change", showUploadPortfolioLink);
});


function showUploadCV() {
    document.getElementById("uploadCVInput").style.display = "block";
    document.getElementById("uploadCVLinkInput").style.display = "none";
}

function showUploadCVLink() {
    document.getElementById("uploadCVInput").style.display = "none";
    document.getElementById("uploadCVLinkInput").style.display = "block";
}

function showUploadPortfolio() {
    document.getElementById("uploadPortfolioInput").style.display = "block";
    document.getElementById("uploadPortfolioLinkInput").style.display = "none";
}

function showUploadPortfolioLink() {
    document.getElementById("uploadPortfolioInput").style.display = "none";
    document.getElementById("uploadPortfolioLinkInput").style.display = "block";
}


// video player javaScript
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});
