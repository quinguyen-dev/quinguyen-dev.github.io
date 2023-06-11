$(function () {
    const sections = $("section");
    const groups = $("header").add(sections);

    var index = 0;
    var delay = setInterval(function () {
        if (index <= sections.length) {
            $(groups[index]).addClass("reveal");
            index += 1;
        } else {
            clearInterval(delay);
        }
    }, 350);

    $(window).on("beforeunload", function () {
        /* Reset the page to the top */
        $("body").hide();
        $(this).scrollTop(0);
    });

    $(window).scroll(function () {
        /* Get the position of the top of the screen */
        var position = $(this).scrollTop();

        /* For each section in the DOM */
        sections.each(function () {
            /* Figure out how far each section is from the top, minus offset */
            var target = $(this).offset().top - 128;
            var id = $(this).attr("id");

            if (position >= target) {
                $("#nav-links > li > a").removeClass("selected");
                $("#nav-links > li > a[href=#" + id + "]").addClass("selected");
            }
        });
    });

    const cards = $(".project-card");
    cards.on("mouseover mouseout", function (event) {
        event.type === "mouseover"
            ? cards.not($(this)).addClass("inactive")
            : cards.removeClass("inactive");
    });
});
