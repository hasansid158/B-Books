// Sticky Nav

const navbar = $(".navbar");

$(document).ready(function () {

    $(window).scroll(function () {
        const scrollPos = $(document).scrollTop();

        if (scrollPos > 80) {
            $(".header-margin").css("margin-top", "22vmin");
            navbar.addClass("sticky");
            console.log($(".header-margin"));

        } else {
            navbar.removeClass("sticky");
        }
    });


    // Counter Anim
    const nCount = function (selector) {
        $(selector).each(function () {
            $(this).animate({
                counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            })
        })
    }

    let a = 0;
    $(window).scroll(function () {
        const oTop = $(".numbers").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() >= oTop) {
            a++;
            nCount(".rect>h1");
        }
    })
});