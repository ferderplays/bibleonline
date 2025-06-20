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