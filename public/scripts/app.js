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
        $(".sidePage").css("z-index", "10");
        $(".acmeContainer").css("padding-bottom", "0");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksYUFBSixHQUFvQixZQUFXO0FBQzNCLFFBQUksU0FBUyxFQUFFLFdBQUYsRUFBZSxHQUFmLEdBQXFCLE1BQWxDO0FBQ0EsUUFBSSxTQUFTLENBQVQsSUFBYyxTQUFTLEVBQTNCLEVBQStCO0FBQzNCLFVBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsZUFBM0I7QUFDQSxVQUFFLGVBQUYsRUFBbUIsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsT0FBbEM7QUFDSCxLQUhELE1BR087QUFDSCxVQUFFLGFBQUYsRUFBaUIsR0FBakIsQ0FBcUIsU0FBckIsRUFBZ0MsT0FBaEM7QUFDQSxVQUFFLFlBQUYsRUFBZ0IsR0FBaEIsQ0FBb0IsU0FBcEIsRUFBK0IsTUFBL0I7QUFDQSxVQUFFLFdBQUYsRUFBZSxHQUFmLENBQW1CLFNBQW5CLEVBQThCLElBQTlCO0FBQ0EsVUFBRSxnQkFBRixFQUFvQixHQUFwQixDQUF3QixnQkFBeEIsRUFBMEMsR0FBMUM7QUFFSDs7QUFFRCxNQUFFLFFBQUYsRUFBWSxHQUFaLENBQWdCLE9BQWhCO0FBQ0EsTUFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLGtCQUE1QjtBQUNBLE1BQUUsY0FBRixFQUFrQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNBLFFBQUksU0FBSjtBQUNILENBakJEOztBQW1CQSxJQUFJLFNBQUosR0FBZ0IsWUFBVztBQUN2QixNQUFFLFdBQUYsRUFBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQVk7QUFDbkMsZ0JBQVEsR0FBUixDQUFZLFVBQVo7QUFDQSxVQUFFLFdBQUYsRUFBZSxXQUFmLENBQTJCLGVBQTNCO0FBQ0EsVUFBRSxXQUFGLEVBQWUsR0FBZixDQUFtQixFQUFuQjtBQUNILEtBSkQ7QUFLSCxDQU5EOztBQVFBLElBQUksV0FBSixHQUFrQixZQUFXO0FBQ3pCLE1BQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixRQUFuQixFQUE2QixVQUFVLENBQVYsRUFBYTtBQUN0QyxVQUFFLGNBQUY7O0FBRUEsVUFBRSxRQUFGLEVBQVksR0FBWixDQUFnQixFQUFoQjtBQUNBLFVBQUUsWUFBRixFQUFnQixRQUFoQixDQUF5QixrQkFBekI7QUFDQSxVQUFFLGNBQUYsRUFBa0IsR0FBbEIsQ0FBc0IsU0FBdEIsRUFBaUMsT0FBakM7O0FBR0EsZUFBTyxVQUFQLENBQWtCLFlBQVk7QUFDMUIsZ0JBQUksYUFBSjtBQUNILFNBRkQsRUFFRyxHQUZIO0FBR0gsS0FYRDtBQVlILENBYkQ7O0FBZUEsSUFBSSxjQUFKLEdBQXFCLFlBQVc7QUFDNUIsTUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ25DLFlBQUksS0FBSyxPQUFULEVBQWtCO0FBQ2QsY0FBRSxXQUFGLEVBQWUsR0FBZixDQUFtQixTQUFuQixFQUE4QixPQUE5QjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUUsV0FBRixFQUFlLEdBQWYsQ0FBbUIsU0FBbkIsRUFBOEIsTUFBOUI7QUFDSDtBQUNKLEtBTkQ7QUFRSCxDQVREOztBQVdBLElBQUksSUFBSixHQUFXLFlBQVc7QUFDbEIsUUFBSSxXQUFKO0FBQ0EsUUFBSSxjQUFKO0FBQ0gsQ0FIRDs7QUFLQSxFQUFFLFlBQVU7QUFDUixRQUFJLElBQUo7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxlbmd0aCA9ICQoXCIjcGFzc3dvcmRcIikudmFsKCkubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPCA4IHx8IGxlbmd0aCA+IDI0KSB7XG4gICAgICAgICQoXCIjcGFzc3dvcmRcIikudG9nZ2xlQ2xhc3MoXCJwYXNzd29yZEVycm9yXCIpO1xuICAgICAgICAkKFwiLmVycm9yTWVzc2FnZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLmxvZ291dFBhZ2VcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAkKFwiLmxvZ2luUGFnZVwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgJChcIi5zaWRlUGFnZVwiKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XG4gICAgICAgICQoXCIuYWNtZUNvbnRhaW5lclwiKS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiLCBcIjBcIilcblxuICAgIH1cblxuICAgICQoXCIjbG9naW5cIikudmFsKFwibG9naW5cIik7XG4gICAgJChcIi5sb2dpbkZvcm1cIikucmVtb3ZlQ2xhc3MoXCJsb2dpbkZvcm1Mb2FkaW5nXCIpO1xuICAgICQoXCIubG9hZGluZ0ljb25cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgYXBwLnJlc2V0Rm9ybSgpO1xufVxuXG5hcHAucmVzZXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIiNwYXNzd29yZFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBmb2N1c1wiKVxuICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLnJlbW92ZUNsYXNzKFwicGFzc3dvcmRFcnJvclwiKTtcbiAgICAgICAgJChcIiNwYXNzd29yZFwiKS52YWwoXCJcIilcbiAgICB9KTtcbn1cblxuYXBwLmhhbmRsZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIi5sb2dpbkZvcm1cIikub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoXCIjbG9naW5cIikudmFsKFwiXCIpO1xuICAgICAgICAkKFwiLmxvZ2luRm9ybVwiKS5hZGRDbGFzcyhcImxvZ2luRm9ybUxvYWRpbmdcIik7XG4gICAgICAgICQoXCIubG9hZGluZ0ljb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXBwLmVycm9ySGFuZGxpbmcoKTtcbiAgICAgICAgfSwgODAwKVxuICAgIH0pO1xufVxuXG5hcHAuaGFuZGxlQ2hlY2tib3ggPSBmdW5jdGlvbigpIHtcbiAgICAkKFwiLmNoZWNrYm94XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAkKFwiLmlubmVyQm94XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5pbm5lckJveFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGFwcC5oYW5kbGVMb2dpbigpO1xuICAgIGFwcC5oYW5kbGVDaGVja2JveCgpO1xufVxuXG4kKGZ1bmN0aW9uKCl7XG4gICAgYXBwLmluaXQoKTtcbn0pIl19
