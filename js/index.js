
$(document).ready(function () {
    $(".imgbox").click(function () {
        $(".imgbox-active").remove();
        $("body").append("<div></div>");
        $("body div:last").addClass("imgbox-active");
        $(".imgbox-active").append("<img>");
        $(".imgbox-active").click(function () {
            $(this).remove();
        });
    });
});