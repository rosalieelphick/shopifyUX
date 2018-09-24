(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var app = {};

app.errorHandling = function () {
    var length = $("#password").val().length;
    if (length < 8 || length > 24) {
        $("#password").toggleClass("passwordError");
        $(".errorMessage").css("display", "block");
    } else {
        $(".logoutPage").css("display", "block");
        $(".loginPage").css("display", "none");
    }

    $("#login").val("login");
    $(".loginForm").removeClass("loginFormLoading");
    $(".loadingIcon").css("display", "none");
    app.resetForm();
};

app.resetForm = function () {
    $("#password").on("focus", function () {
        console.log("in focus");
        $("#password").removeClass("passwordError");
        $("#password").val("");
    });
};

app.handleLogin = function () {
    $(".loginForm").on("submit", function (e) {
        e.preventDefault();

        $("#login").val("");
        $(".loginForm").addClass("loginFormLoading");
        $(".loadingIcon").css("display", "block");

        window.setTimeout(function () {
            app.errorHandling();
        }, 800);
    });
};

app.handleCheckbox = function () {
    $(".checkbox").on("click", function () {
        if (this.checked) {
            $(".innerBox").css("display", "block");
        } else {
            $(".innerBox").css("display", "none");
        }
    });
};

app.init = function () {
    app.handleLogin();
    app.handleCheckbox();
};

$(function () {
    app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksYUFBSixHQUFvQixZQUFXO0FBQzNCLFFBQUksU0FBUyxFQUFFLFdBQUYsRUFBZSxHQUFmLEdBQXFCLE1BQWxDO0FBQ0EsUUFBSSxTQUFTLENBQVQsSUFBYyxTQUFTLEVBQTNCLEVBQStCO0FBQzNCLFVBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsZUFBM0I7QUFDQSxVQUFFLGVBQUYsRUFBbUIsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsT0FBbEM7QUFDSCxLQUhELE1BR087QUFDSCxVQUFFLGFBQUYsRUFBaUIsR0FBakIsQ0FBcUIsU0FBckIsRUFBZ0MsT0FBaEM7QUFDQSxVQUFFLFlBQUYsRUFBZ0IsR0FBaEIsQ0FBb0IsU0FBcEIsRUFBK0IsTUFBL0I7QUFDSDs7QUFFRCxNQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLE9BQWhCO0FBQ0EsTUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLGtCQUE1QjtBQUNBLE1BQUUsY0FBRixFQUFrQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNBLFFBQUksU0FBSjtBQUNILENBZEQ7O0FBZ0JBLElBQUksU0FBSixHQUFnQixZQUFXO0FBQ3ZCLE1BQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBWTtBQUNuQyxnQkFBUSxHQUFSLENBQVksVUFBWjtBQUNBLFVBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsZUFBM0I7QUFDQSxVQUFFLFdBQUYsRUFBZSxHQUFmLENBQW1CLEVBQW5CO0FBQ0gsS0FKRDtBQUtILENBTkQ7O0FBUUEsSUFBSSxXQUFKLEdBQWtCLFlBQVc7QUFDekIsTUFBRSxZQUFGLEVBQWdCLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLFVBQVUsQ0FBVixFQUFhO0FBQ3RDLFVBQUUsY0FBRjs7QUFFQSxVQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLEVBQWhCO0FBQ0EsVUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCLGtCQUF6QjtBQUNBLFVBQUUsY0FBRixFQUFrQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxPQUFqQzs7QUFHQSxlQUFPLFVBQVAsQ0FBa0IsWUFBWTtBQUMxQixnQkFBSSxhQUFKO0FBQ0gsU0FGRCxFQUVHLEdBRkg7QUFHSCxLQVhEO0FBWUgsQ0FiRDs7QUFlQSxJQUFJLGNBQUosR0FBcUIsWUFBVztBQUM1QixNQUFFLFdBQUYsRUFBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQVk7QUFDbkMsWUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDZCxjQUFFLFdBQUYsRUFBZSxHQUFmLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBRSxXQUFGLEVBQWUsR0FBZixDQUFtQixTQUFuQixFQUE4QixNQUE5QjtBQUNIO0FBQ0osS0FORDtBQVFILENBVEQ7O0FBV0EsSUFBSSxJQUFKLEdBQVcsWUFBVztBQUNsQixRQUFJLFdBQUo7QUFDQSxRQUFJLGNBQUo7QUFDSCxDQUhEOztBQUtBLEVBQUUsWUFBVTtBQUNSLFFBQUksSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmVycm9ySGFuZGxpbmcgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbGVuZ3RoID0gJChcIiNwYXNzd29yZFwiKS52YWwoKS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA8IDggfHwgbGVuZ3RoID4gMjQpIHtcbiAgICAgICAgJChcIiNwYXNzd29yZFwiKS50b2dnbGVDbGFzcyhcInBhc3N3b3JkRXJyb3JcIik7XG4gICAgICAgICQoXCIuZXJyb3JNZXNzYWdlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIubG9nb3V0UGFnZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICQoXCIubG9naW5QYWdlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIH1cblxuICAgICQoXCIjbG9naW5cIikudmFsKFwibG9naW5cIik7XG4gICAgJChcIi5sb2dpbkZvcm1cIikucmVtb3ZlQ2xhc3MoXCJsb2dpbkZvcm1Mb2FkaW5nXCIpO1xuICAgICQoXCIubG9hZGluZ0ljb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgYXBwLnJlc2V0Rm9ybSgpO1xufVxuXG5hcHAucmVzZXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIiNwYXNzd29yZFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBmb2N1c1wiKVxuICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLnJlbW92ZUNsYXNzKFwicGFzc3dvcmRFcnJvclwiKTtcbiAgICAgICAgJChcIiNwYXNzd29yZFwiKS52YWwoXCJcIilcbiAgICB9KTtcbn1cblxuYXBwLmhhbmRsZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIi5sb2dpbkZvcm1cIikub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoXCIjbG9naW5cIikudmFsKFwiXCIpO1xuICAgICAgICAkKFwiLmxvZ2luRm9ybVwiKS5hZGRDbGFzcyhcImxvZ2luRm9ybUxvYWRpbmdcIik7XG4gICAgICAgICQoXCIubG9hZGluZ0ljb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXBwLmVycm9ySGFuZGxpbmcoKTtcbiAgICAgICAgfSwgODAwKVxuICAgIH0pO1xufVxuXG5hcHAuaGFuZGxlQ2hlY2tib3ggPSBmdW5jdGlvbigpIHtcbiAgICAkKFwiLmNoZWNrYm94XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAkKFwiLmlubmVyQm94XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5pbm5lckJveFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGFwcC5oYW5kbGVMb2dpbigpO1xuICAgIGFwcC5oYW5kbGVDaGVja2JveCgpO1xufVxuXG4kKGZ1bmN0aW9uKCl7XG4gICAgYXBwLmluaXQoKTtcbn0pIl19
