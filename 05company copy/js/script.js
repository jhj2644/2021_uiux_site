$(document).ready(function(){
    const slider1 = $('.slider').bxSlider({
        controls:false
    });
    $(".nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevBtn").click(function(){
        slider1.goTopPrevSlide();
    })
});