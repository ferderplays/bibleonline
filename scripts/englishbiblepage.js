let isBeirutiUsed = true,
    isAmiriUsed = false,
    isUnifrakturUsed = false;

$("#beirutitoggle").click(function() {
    if (isBeirutiUsed) {
        console.log("Beiruti is already in use");
        return;
    } else {
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
})