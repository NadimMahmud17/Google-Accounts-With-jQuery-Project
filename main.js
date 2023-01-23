$(document).ready(function () {
    $(".input-field").focusout(function () {
        var inputValue = $(this).val();

        if (inputValue === "") {

            $(this).reveClass("has-value");
        }
        else {
            $(this).addClass("has-value");
        }

    })

});

