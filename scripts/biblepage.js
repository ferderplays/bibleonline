let areSettingsOpened = false;

let isMemorizationBasic = true,
    isMemorizationRGB = false;

$("#settingstoggle").click(function() {
    if (areSettingsOpened) {
        $(".settings-container").addClass("hidden");
        $(".slim").addClass("wide");
        $(".slim").removeClass("slim");
        areSettingsOpened = false;
    } else {
        $(".hidden").removeClass("hidden");
        $(".wide").addClass("slim");
        $(".wide").removeClass("wide");
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

$("#rgbenable").click(function() {
    if (isMemorizationRGB) {
        console.log("RGB mode is already activated");
        return;
    } else {
        $(".memorizationcolors").addClass("rgbmode");
        isMemorizationRGB = true;
        isMemorizationBasic = false;
    }
});

$("#basicenable").click(function() {
    if (isMemorizationBasic) {
        console.log("Basic mode is already activated");
        return;
    } else {
        $(".memorizationcolors").removeClass("rgbmode");
        isMemorizationBasic = true;
        isMemorizationRGB = false;
    }
});