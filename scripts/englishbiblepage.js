let isBeirutiUsed = true,
    isAmiriUsed = false,
    isUnifrakturUsed = false;

let isModernSelected = true,
    isFrakturSelected = false;

$("#beirutitoggle").click(function() {
    if (isBeirutiUsed) {
        console.log("Beiruti is already in use");
        return;
    } else {
        $(".selected-style").removeClass("selected-style");
        $("#beirutitoggle").addClass("selected-style");
        if (isUnifrakturUsed) {
            $(".verse-text").removeClass("unifraktur");
            isUnifrakturUsed = false;
        } else if (isAmiriUsed) {
            $(".verse-text").removeClass("amiri");
            isAmiriUsed = false;
        }
        isBeirutiUsed = true;
    }
});

$("#unifrakturtoggle").click(function() {
    if (isUnifrakturUsed) {
        console.log("Unifraktur is already in use");
        return;
    } else {
        $(".selected-style").removeClass("selected-style");
        $("#unifrakturtoggle").addClass("selected-style");
        if (isBeirutiUsed) {
            $(".verse-text").addClass("unifraktur");
            isBeirutiUsed = false;
        } else if (isAmiriUsed) {
            $(".verse-text").removeClass("amiri");
            $(".verse-text").addClass("unifraktur");
            isAmiriUsed = false;
        }
        isUnifrakturUsed = true;
    }
});

$("#amiritoggle").click(function() {
    if (isAmiriUsed) {
        console.log("Amiri is already in use");
        return;
    } else {
        $(".selected-style").removeClass("selected-style");
        $("#amiritoggle").addClass("selected-style");
        if (isUnifrakturUsed) {
            $(".verse-text").removeClass("unifraktur");
            $(".verse-text").addClass("amiri");
            isUnifrakturUsed = false;
        } else if (isBeirutiUsed) {
            $(".verse-text").addClass("amiri");
            isBeirutiUsed = false;
        }
        isAmiriUsed = true;
    }
});

$("#frakturenable").click(function() {
    if (isFrakturSelected) {
        console.log("fraktur is already selected");
        return;
    } else {
        $(".selected").removeClass("selected");
        $("#frakturenable").addClass("selected");

        // applies the default fraktur font
        if (isAmiriUsed) {
            $(".amiri").addClass("unifraktur");
            $(".amiri").removeClass("amiri");
        } else { $(".verse-text").addClass("unifraktur"); }
        $("#unifrakturtoggle").addClass("selected-style");
        isUnifrakturUsed = true;

        // makes only fraktur fonts display in the settings
        $(".unselected").removeClass("unselected");
        $("#beirutitoggle").addClass("unselected");
        $("#amiritoggle").addClass("unselected");

        isModernSelected = false;
        isFrakturSelected = true;
    }
});

$("#modernenable").click(function() {
    if (isModernSelected) {
        console.log("modern is already selected");
        return;
    } else {
        $(".selected").removeClass("selected");
        $("#modernenable").addClass("selected");

        // applies the default modern font
        $(".verse-text").removeClass("unifraktur");
        $("#beirutitoggle").addClass("selected-style");
        isBeirutiUsed = true;

        // makes only modern fonts display in the settings
        $(".unselected").removeClass("unselected");
        $("#unifrakturtoggle").addClass("unselected");

        isModernSelected = true;
        isFrakturSelected = false;
    }
});