let isMoshrefUsed = true, 
    isGandharaUsed = false,
    isAmiriUsed = false,
    isCairoUsed = false,
    isGranadaUsed = false,
    isNaskhUsed = false, // noto naskh arabic font
    isArefUsed = false;

let isThuluthSelected = true,
    isNaskhSelected = false,
    isModernSelected = false;

$("#moshreftoggle").click(function() {
    if (isMoshrefUsed) {
        console.log("Moshref is already in use");
        return;
    }
    else {
        if (isGandharaUsed) {
            $(".gandhara").addClass("amoshref");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("amoshref");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("amoshref");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("amoshref");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("amoshref");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("amoshref");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isMoshrefUsed = true;
    }
});

$("#gandharatoggle").click(function() {
    if (isGandharaUsed) {
        console.log("Gandhara is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("gandhara");
            $(".amoshref").removeClass("amoshref");
            isMoshrefUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("gandhara");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("gandhara");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("gandhara");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("gandhara");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("gandhara");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isGandharaUsed = true;
    }
});

$("#amiritoggle").click(function() {
    if (isAmiriUsed) {
        console.log("Gandhara is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("amiri");
            $(".amoshref").removeClass("moshref");
            isMoshrefUsed = false;
        } else if (isGandharaUsed) {
            $(".gandhara").addClass("amiri");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("amiri");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("amiri");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("amiri");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("amiri");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isAmiriUsed = true;
    }
});

$("#cairotoggle").click(function() {
    if (isCairoUsed) {
        console.log("Cairo is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("cairo");
            $(".amoshref").removeClass("moshref");
            isMoshrefUsed = false;
        } else if (isGandharaUsed) {
            $(".gandhara").addClass("cairo");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("cairo");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("cairo");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("cairo");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("cairo");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isCairoUsed = true;
    }
});

$("#granadatoggle").click(function() {
    if (isGranadaUsed) {
        console.log("Granada is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("granada");
            $(".amoshref").removeClass("moshref");
            isMoshrefUsed = false;
        } else if (isGandharaUsed) {
            $(".gandhara").addClass("granada");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("granada");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("granada");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("granada");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("granada");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isGranadaUsed = true;
    }
});

$("#naskhtoggle").click(function() {
    if (isNaskhUsed) {
        console.log("Noto Naskh is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("naskh");
            $(".amoshref").removeClass("moshref");
            isMoshrefUsed = false;
        } else if (isGandharaUsed) {
            $(".gandhara").addClass("naskh");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("naskh");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("naskh");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("naskh");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isArefUsed) {
            $(".aref").addClass("naskh");
            $(".aref").removeClass("aref");
            isArefUsed = false;
        }
        isNaskhUsed = true;
    }
});

$("#areftoggle").click(function() {
    if (isArefUsed) {
        console.log("Aref Ruqaa is already in use");
        return;
    }
    else {
        if (isMoshrefUsed) {
            $(".amoshref").addClass("aref");
            $(".amoshref").removeClass("moshref");
            isMoshrefUsed = false;
        } else if (isGandharaUsed) {
            $(".gandhara").addClass("aref");
            $(".gandhara").removeClass("gandhara");
            isGandharaUsed = false;
        } else if (isAmiriUsed) {
            $(".amiri").addClass("aref");
            $(".amiri").removeClass("amiri");
            isAmiriUsed = false;
        } else if (isCairoUsed) {
            $(".cairo").addClass("aref");
            $(".cairo").removeClass("cairo");
            isCairoUsed = false;
        } else if (isGranadaUsed) {
            $(".granada").addClass("aref");
            $(".granada").removeClass("granada");
            isGranadaUsed = false;
        } else if (isNaskhUsed) {
            $(".naskh").addClass("aref");
            $(".naskh").removeClass("naskh");
            isNaskhUsed = false;
        }
        isArefUsed = true;
    }
});
