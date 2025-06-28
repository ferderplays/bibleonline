let areSettingsOpened = false;

let isMemorizationBasic = true,
    isMemorizationRGB = false,
    isMemorizationTiktok = false;

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
        if (isMemorizationBasic) {
            $(".memorizationcolors").addClass("rgbmode");
        } else {
            $(".memorizationcolors").removeClass("tiktokmode");
            $(".memorizationcolors").addClass("rgbmode");
        }
        $(".selected-pallete").removeClass("selected-pallete");
        $("#rgbenable").addClass("selected-pallete");
        isMemorizationRGB = true;
        isMemorizationBasic = false;
        isMemorizationTiktok = false;
    }
});

$("#basicenable").click(function() {
    if (isMemorizationBasic) {
        console.log("Basic mode is already activated");
        return;
    } else {
        if (isMemorizationRGB) {
            $(".memorizationcolors").removeClass("rgbmode");
        } else {
            $(".memorizationcolors").removeClass("tiktokmode");
        }
        $(".selected-pallete").removeClass("selected-pallete");
        $("#basicenable").addClass("selected-pallete");
        isMemorizationBasic = true;
        isMemorizationRGB = false;
        isMemorizationTiktok = false;
    }
});

$("#tiktokenable").click(function() {
    if (isMemorizationRGB) {
        console.log("RGB mode is already activated");
        return;
    } else {
        if (isMemorizationBasic) {
            $(".memorizationcolors").addClass("tiktokmode");
        } else {
            $(".memorizationcolors").removeClass("rgbmodemode");
            $(".memorizationcolors").addClass("tiktokmode");
        }
        $(".selected-pallete").removeClass("selected-pallete");
        $("#rgbenable").addClass("selected-pallete");
        isMemorizationTiktok = true;
        isMemorizationRGB = false;
        isMemorizationBasic = false;
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

$(".searchbutton").click(function() {
    searchedText = $("#search").val().toLowerCase();
    console.log(searchedText);
    if (searchedText === "" || searchedText.includes("\n")) {
        $(".verse-text").removeClass("searched");
    } else {
        $(".verse-text").removeClass("searched");
        //$(".verse-text:contains(" + searchedText + ")").addClass("searched");  - that was case sensitive
        $(".verse-text").each(function(i, obj) {
            if ($(obj).text().toLowerCase().includes(searchedText)) {
                $(obj).addClass("searched");
                $("html, body").animate({
                    scrollTop: $(obj).offset().top - 150
                }, 50);
            }
        });
    }
});