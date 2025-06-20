let areSettingsOpened = false;

$("#settingstoggle").click(function() {
    if (areSettingsOpened) {
        $(".settings-container").addClass("hidden");
        areSettingsOpened = false;
    } else {
        $(".hidden").removeClass("hidden");
        areSettingsOpened = true;
    }
});

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $("header").addClass("fixed");
        $(".chapterlist-container").addClass("floating");
    } else {
        $("header").removeClass("fixed");
        $(".chapterlist-container").removeClass("floating");
    }
});