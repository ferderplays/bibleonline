let areSettingsOpened = false;

let isMemorizationBasic = true,
    isMemorizationRGB = false,
    isMemorizationTiktok = false;

let isReadModeActivated = true,
    isVerseModeActivated = false;

let highlightColor = "orange";

$(document).ready(function() {
    mode = localStorage.getItem("mode"); 
    memorizationColors = localStorage.getItem("memorizationcolors");
    console.log(mode);
    if (mode != null) {
        switch (mode) {
            case "versebyverse":
                $(".verses-container").addClass("versemode");
                $(".selected-mode").removeClass("selected-mode");
                $("#versemode").addClass("selected-mode");
                isVerseModeActivated = true;
                isReadModeActivated = false;
                break;

            case "reading":
                $(".verses-container").removeClass("versemode");
                $(".selected-mode").removeClass("selected-mode");
                $("#readmode").addClass("selected-mode");
                isReadModeActivated = true;
                isVerseModeActivated = false;
                break;
        }
    }
    if (memorizationColors != null) {
        loadMemorizationColors(localStorage.getItem("initialmemorizationcolors"), memorizationColors);
    }
});

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

        saveToLocalStorage("memorizationcolors", "rgbmode");

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
            loadMemorizationColors("rgbmode", "basic");
            saveToLocalStorage("initialmemorizationcolors", "rgbmode");
        } else {
            loadMemorizationColors("tiktokmode", "basic");
            saveToLocalStorage("initialmemorizationcolors", "tiktokmode");
        }
        $(".selected-pallete").removeClass("selected-pallete");
        $("#basicenable").addClass("selected-pallete");

        saveToLocalStorage("memorizationcolors", "basic");

        isMemorizationBasic = true;
        isMemorizationRGB = false;
        isMemorizationTiktok = false;
    }
});

$("#tiktokenable").click(function() {
    if (isMemorizationTiktok) {
        console.log("Tiktok mode is already activated");
        return;
    } else {
        if (isMemorizationBasic) {
            loadMemorizationColors("basic", "tiktokmode");
            saveToLocalStorage("initialmemorizationcolors", "basic");
        } else {
            loadMemorizationColors("rgbmode", "tiktokmode");
            saveToLocalStorage("initialmemorizationcolors", "rgbmode");
        }
        $(".selected-pallete").removeClass("selected-pallete");
        $("#tiktokenable").addClass("selected-pallete");

        saveToLocalStorage("memorizationcolors", "tiktokmode");

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

        saveToLocalStorage("mode", "reading");

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

        saveToLocalStorage("mode", "versebyverse");

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

$(".verse-text").click(function() {
    if (!$(this).hasClass("highlighted")) $(this).addClass("highlighted");
    else $(this).removeClass("highlighted");
});

$("#clearstorage").click(function() {
    clearStorage();
});

function clearStorage() {
    localStorage.removeItem("initialfont");
    localStorage.removeItem("font");
    localStorage.removeItem("mode");
    localStorage.removeItem("initialmemorizationcolors");
    localStorage.removeItem("memorizationcolors");
}

function saveToLocalStorage(itemName, itemValue) {
    if (typeof(Storage) != null) {
        localStorage.setItem(itemName, itemValue);
        localStorage.setItem(itemName, itemValue);
    }
}

function loadMemorizationColors(initialColors, newColors) {
    if (newColors == "basic") {
        $(".memorizationcolors").removeClass(initialColors);
    } else if (initialColors == "basic") {
        $(".memorizationcolors").addClass(newColors);
    } else {
        $(".memorizationcolors").removeClass(initialColors);
        $(".memorizationcolors").addClass(newColors);
    }
}

function loadFont(initialFont, newFont) {
    // beiruti font here does not have a specific font class name, so it is an exception to the casual loading process
    if (newFont === "beiruti") {
        $(".verse-text").removeClass(initialFont);
        $(".verses-container .subtitle").removeClass(initialFont);
        $(".verses-container .grouping").removeClass(initialFont);

        saveToLocalStorage("initialfont", initialFont);
        saveToLocalStorage("font", "beiruti");
    } else if (initialFont === "beiruti") { 
        $(".verse-text").addClass(newFont);
        $(".verses-container .subtitle").addClass(newFont);
        $(".verses-container .grouping").addClass(newFont);

        saveToLocalStorage("initialfont", "beiruti");
        saveToLocalStorage("font", newFont);
    } else { 
        // the casual loading process
        $(".verse-text").removeClass(initialFont);
        $(".verses-container .subtitle").removeClass(initialFont);
        $(".verses-container .grouping").removeClass(initialFont); 
        $(".verse-text").addClass(newFont);
        $(".verses-container .subtitle").addClass(newFont);
        $(".verses-container .grouping").addClass(newFont);

        saveToLocalStorage("initialfont", initialFont);
        saveToLocalStorage("font", newFont);
    }
}