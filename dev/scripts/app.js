const app = {};

app.errorHandling = function() {
    let length = $("#password").val().length;
    if (length < 8 || length > 24) {
        $("#password").toggleClass("passwordError");
        $(".errorMessage").css("display", "block")
    } else {
        $(".logoutPage").css("display", "block");
        $(".loginPage").css("display", "none");
    }

    $("#login").val("login");
    $(".loginForm").removeClass("loginFormLoading");
    $(".loadingIcon").css("display", "none");
    app.resetForm();
}

app.resetForm = function() {
    $("#password").on("focus", function () {
        console.log("in focus")
        $("#password").removeClass("passwordError");
        $("#password").val("")
    });
}

app.handleLogin = function() {
    $(".loginForm").on("submit", function (e) {
        e.preventDefault();

        $("#login").val("");
        $(".loginForm").addClass("loginFormLoading");
        $(".loadingIcon").css("display", "block");


        window.setTimeout(function () {
            app.errorHandling();
        }, 800)
    });
}

app.handleCheckbox = function() {
    $(".checkbox").on("click", function () {
        if (this.checked) {
            $(".innerBox").css("display", "block")
        } else {
            $(".innerBox").css("display", "none")
        }
    })

}

app.init = function() {
    app.handleLogin();
    app.handleCheckbox();
}

$(function(){
    app.init();
})