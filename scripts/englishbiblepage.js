let isBeirutiUsed = true,
    isAmiriUsed = false,
    isUnifrakturUsed = false,
    isFrakturcookUsed = false,
    isLovelightUsed = false;

let isModernSelected = true,
    isFrakturSelected = false,
    isCursiveSelected = false;

$("#beirutitoggle").click(function() {
    if (isBeirutiUsed) {
        console.log("Beiruti is already in use");
        return;
    } else {
        $(".selected-style").removeClass("selected-style");
        $("#beirutitoggle").addClass("selected-style");
        if (isUnifrakturUsed) {
            loadFont("unifraktur", "beiruti");
            isUnifrakturUsed = false;
        } else if (isAmiriUsed) {
            loadFont("amiri", "beiruti");
            isAmiriUsed = false;
        } else if (isFrakturcookUsed) {
            loadFont("frakturcook", "beiruti");
            isFrakturcookUsed = false;
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
        if (isFrakturcookUsed) {
            loadFont("frakturcook", "unifraktur");
            isFrakturcookUsed = false;
        } else if (isBeirutiUsed) {
            loadFont("beiruti", "unifraktur");
            isBeirutiUsed = false;
        } else if (isAmiriUsed) {
            loadFont("amiri", "unifraktur");
            isFrakturcookUsed = false;
        } else if (isLovelightUsed) {
            loadFont("lovelight", "unifraktur");
            isLovelightUsed = false;
        }
        isUnifrakturUsed = true;
    }
});

$("#frakturcooktoggle").click(function() {
    if (isFrakturcookUsed) {
        console.log("Unifraktur Cook is already in use");
        return;
    } else {
        $(".selected-style").removeClass("selected-style");
        $("#frakturcooktoggle").addClass("selected-style");
        if (isUnifrakturUsed) {
            loadFont("unifraktur", "frakturcook");
            isUnifrakturUsed = false;
        } else if (isBeirutiUsed) {
            loadFont("beiruti", "frakturcook");
            isBeirutiUsed = false;
        } else if (isAmiriUsed) {
            loadFont("amiri", "frakturcook");
            isFrakturcookUsed = false;
        } else if (isLovelightUsed) {
            loadFont("lovelight", "frakturcook");
            isLovelightUsed = false;
        }
        isFrakturcookUsed = true;
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
            loadFont("unifraktur", "amiri");
            isUnifrakturUsed = false;
        } else if (isBeirutiUsed) {
            loadFont("beiruti", "amiri");
            isBeirutiUsed = false;
        } else if (isFrakturcookUsed) {
            loadFont("frakturcook", "amiri");
            isFrakturcookUsed = false;
        } else if (isLovelightUsed) {
            loadFont("lovelight", "amiri");
            isLovelightUsed = false;
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
        if (isBeirutiUsed) { 
            loadFont("beiruti", "unifraktur");
        } else if (isAmiriUsed) { 
            loadFont("amiri", "unifraktur");
        } else if (isLovelightUsed) {
            loadFont("lovelight", "unifraktur");
        }

        $(".selected-style").removeClass("selected-style");
        $("#unifrakturtoggle").addClass("selected-style");

        isUnifrakturUsed = true;
        isFrakturcookUsed = false;
        isBeirutiUsed = false;
        isAmiriUsed = false;

        // makes only fraktur fonts display in the settings
        $(".unselected").removeClass("unselected");
        $("#beirutitoggle").addClass("unselected");
        $("#amiritoggle").addClass("unselected");
        $("#lovelighttoggle").addClass("unselected");
        $("#areftoggle").addClass("unselected");

        isFrakturSelected = true;
        isModernSelected = false;
        isCursiveSelected = false;
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
        if (isUnifrakturUsed) {
            loadFont("unifraktur", "beiruti");
        } else if (isFrakturcookUsed) { 
            loadFont("frakturcook", "beiruti");
        } else if (isAmiriUsed) { 
            loadFont("amiri", "beiruti");
        } else if (isLovelightUsed) {
            loadFont("lovelight", "beiruti");
        }

        $("#beirutitoggle").addClass("selected-style");
        $("#amiritoggle").removeClass("selected-style");

        isBeirutiUsed = true;
        isUnifrakturUsed = false;
        isFrakturcookUsed = false;
        isAmiriUsed = false;
        isLovelightUsed = false;

        // makes only modern fonts display in the settings
        $(".unselected").removeClass("unselected");
        $("#unifrakturtoggle").addClass("unselected");
        $("#frakturcooktoggle").addClass("unselected");
        $("#lovelighttoggle").addClass("unselected");
        $("#areftoggle").addClass("unselected");

        isModernSelected = true;
        isFrakturSelected = false;
        isCursiveSelected = false;
    }
});

$("#cursiveenable").click(function() {
    if (isCursiveSelected) {
        console.log("cursive is already selected");
        return;
    } else {
        $(".selected").removeClass("selected");
        $("#cursiveenable").addClass("selected");

        // applies the default cursive font
        if (isUnifrakturUsed) {
            loadFont("unifraktur", "lovelight");
        } else if (isFrakturcookUsed) { 
            loadFont("frakturcook", "lovelight");
        } else if (isAmiriUsed) { 
            loadFont("amiri", "lovelight");
        } else if (isBeirutiUsed) {
            loadFont("beiruti", "lovelight");
        }

        $("#lovelighttoggle").addClass("selected-style");

        isLovelightUsed = true;
        isBeirutiUsed = false;
        isUnifrakturUsed = false;
        isFrakturcookUsed = false;
        isAmiriUsed = false;

        // makes only modern fonts display in the settings
        $(".unselected").removeClass("unselected");
        $("#unifrakturtoggle").addClass("unselected");
        $("#frakturcooktoggle").addClass("unselected");
        $("#beirutitoggle").addClass("unselected");
        $("#amiritoggle").addClass("unselected");
        $("#areftoggle").addClass("unselected");

        isCursiveSelected = true;
        isFrakturSelected = false;
        isModernSelected = false;
    }
});

function loadFont(initialFont, newFont) {
    // beiruti font here does not have a specific font class name, so it is an exception to the casual loading process
    if (newFont === "beiruti") {
        $(".verse-text").removeClass(initialFont);
        $(".verses-container .subtitle").removeClass(initialFont);
        $(".verses-container .grouping").removeClass(initialFont);
    } else if (initialFont === "beiruti") { 
        $(".verse-text").addClass(newFont);
        $(".verses-container .subtitle").addClass(newFont);
        $(".verses-container .grouping").addClass(newFont);
    } else { 
        // the casual loading process
        $(".verse-text").removeClass(initialFont);
        $(".verses-container .subtitle").removeClass(initialFont);
        $(".verses-container .grouping").removeClass(initialFont); 
        $(".verse-text").addClass(newFont);
        $(".verses-container .subtitle").addClass(newFont);
        $(".verses-container .grouping").addClass(newFont);
    }
}