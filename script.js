window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-145482737-6');

// -----------

var count = 0;
var counter = setInterval(timer, 14830);

function timer() {
    count = count + 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML = count + '%';
    if (count > 99) {
        count = 0;
        return;
    }
}
