(function() {

    var kit = document.getElementsByClassName("kitty");
    var currentKitty = 0;
    var dots = document.getElementsByClassName("dot");
    var timeoutId;
    var inTheMiddle;

    function moveKitties(nextKitty) {
        console.log("the current kitty is " + currentKitty);

        inTheMiddle = true;

        kit[currentKitty].classList.remove("onscreen");
        kit[currentKitty].classList.add("exit");

        dots[currentKitty].classList.remove("current");

        if (typeof nextKitty != "undefined") {
            console.log(nextKitty);
            currentKitty = nextKitty;
        } else {
            currentKitty++;
            if (currentKitty >= kit.length) {
                currentKitty = 0;
            }
        }

        kit[currentKitty].classList.add("onscreen");
        dots[currentKitty].classList.add("current");

        console.log("the NEW current kitty is " + currentKitty);

    }

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            timeoutId = setTimeout(moveKitties, 5000);
            inTheMiddle = false;

        }
    });

    for (var i = 0; i < dots.length; i++) {
        (function (i) {
            dots[i].addEventListener('click', function() {
                if (i == currentKitty) {
                    return;
                }
                if (inTheMiddle) {
                    return;
                }

                clearTimeout(timeoutId);
                moveKitties(i);
                console.log(i);
            }
            );
        })(i);
    }

    setTimeout(moveKitties, 5000);
})();
