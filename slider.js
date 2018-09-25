document.getElementById('slider-left').onclick = sliderLeft;

var left = 0;

function sliderLeft() {
    var line = document.getElementById('line');
    left = left - 200;
    if (left < -600) {
        left = 0;
    }
    line.style.left = left + 'px';
}

document.getElementById('slider-right').onclick = sliderRight;

var right = 0;

function sliderRight() {
    var line = document.getElementById('line');
    right = right - 200;
    if (right < -600) {
        right = 0;
    }
    line.style.right = right + 'px';
}