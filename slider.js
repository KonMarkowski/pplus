var slideIndex = 1;
//add the global timer variable
var slides,dots,timer;
showSlides()

function showSlides() {
    var i;

    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    if(slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace(' old_slide', '')
            slides[i].className = slides[i].className.replace(' active_slide', ' old_slide')
            slides[i].className = slides[i].className.replace(' fade', '')
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active_slide", "");
        }
        slides[slideIndex - 1].className += " active_slide fade";
        dots[slideIndex - 1].className += " active_slide";
    }
        //put the timeout in the timer variable}
    timer = setTimeout(showSlides, 4000);
}

function plusSlides(position) {
    //clear/stop the timer
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' old_slide', '')
        slides[i].className = slides[i].className.replace(' active_slide', ' old_slide')
        slides[i].className = slides[i].className.replace(' fade', '')
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_slide", "");
    }
    slides[slideIndex-1].className += " active_slide fade";
    dots[slideIndex-1].className += " active_slide";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(' old_slide', '')
        slides[i].className = slides[i].className.replace(' active_slide', ' old_slide')
        slides[i].className = slides[i].className.replace(' fade', '')
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_slide", "");
    }
    slides[slideIndex-1].className += " active_slide fade";
    dots[index-1].className += " active_slide";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}