globalThis.toggled = false;

function toggleSideBar() {
    toggled = true;
    document.getElementById("side-bar").classList.toggle("side-bar-hidden");

    document.getElementById("nav-bar").classList.toggle("nav-bar-large");
    document.getElementById("main-body").classList.toggle("main-body-large");
}
$(window).on("resize", function() {
    if ($(window).width() < 1180) {
        $("#side-bar").addClass("side-bar-hidden");
        $("#nav-bar").addClass("nav-bar-large");
        $("#main-body").addClass("main-body-large");
    } else {
        if (!toggled) {
            $("#side-bar").removeClass("side-bar-hidden");
            $("#nav-bar").removeClass("nav-bar-large");
            $("#main-body").removeClass("main-body-large");
        }
    }
});