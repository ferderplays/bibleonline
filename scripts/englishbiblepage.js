let isBeirutiUsed = true,
    isUnifrakturUsed = false;

$("#beirutitoggle").click(function() {
    if (isBeirutiUsed) {
        console.log("Beiruti is already in use");
        return;
    } else {
        if (isUnifrakturUsed) {
            $(".verse-text").removeClass("unifraktur");
            isUnifrakturUsed = false;
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
        }
        isUnifrakturUsed = true;
    }
});