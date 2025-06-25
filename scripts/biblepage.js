let areSettingsOpened = false;

let isMemorizationBasic = true,
    isMemorizationRGB = false;

let isReadModeActivated = true,
    isVerseModeActivated = false;

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
        $(".selected-pallete").removeClass("selected-pallete");
        $("#rgbenable").addClass("selected-pallete");
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
        $(".selected-pallete").removeClass("selected-pallete");
        $("#basicenable").addClass("selected-pallete");
        isMemorizationBasic = true;
        isMemorizationRGB = false;
    }
});

$("#readmode").click(function() {
    if (isReadModeActivated) {
        console.log("Read mode is already activated");
        return;
    } else {
        $(".verses-container").removeClass("versemode");

        $(".selected-mode").removeClass("selected-mode");
        $("#readmode").addClass("selected-mode");

        isReadModeActivated = true;
        isVerseModeActivated = false;
    }
});

$("#versemode").click(function() {
    if (isVerseModeActivated) {
        console.log("Verse mode is already activated");
        return;
    } else {
        $(".verses-container").addClass("versemode");
        
        $(".selected-mode").removeClass("selected-mode");
        $("#versemode").addClass("selected-mode");

        isVerseModeActivated = true;
        isReadModeActivated = false;
    }
});