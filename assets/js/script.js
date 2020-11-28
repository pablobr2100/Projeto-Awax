let slideOnScreen = 0;

function selectedSlide(n) {

    slideOnScreen = n;

    let slide = document.getElementsByClassName("slide");
    let pointer = document.getElementsByClassName("pointer");

    if (n > slide.length ) {
        slideOnScreen = 1
    }
    if (n < 1) {
        slideOnScreen = slide.length
    }


    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
        pointer[i].className = pointer[i].className.replace(" active", "");
    }

    slide[slideOnScreen - 1].style.display = "inline-block";
    pointer[slideOnScreen - 1].className += " active";
}