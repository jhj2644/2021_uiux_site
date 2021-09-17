$(document).ready(function(){
    const slider1 = $('.slider').bxSlider({
        controls:false,
        auto:true,
        touchEnabled:false
    });
    $(".nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevBtn").click(function(){
        slider1.goToPrevSlide();
    });



    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class");
        console.log(toggle);
        if( toggle =="toggle"){
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });





    var swiper = new Swiper(".mySwiper",{
        slidesPerView:3,
        spaceBetween:0,
        controls:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".nextBtn2",
            prevEl: ".prevBtn2",
          },

    });

    
    


});