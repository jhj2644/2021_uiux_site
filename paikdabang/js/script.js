$(document).ready(function(){
    const slider1 = $('.slider').bxSlider({
        controls:false,
        auto:true
    });
    $(".nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevBtn").click(function(){
        slider1.goTopPrevSlide();
    });

    $(".toggle").click(function(){
        const toggle =$(".toggle").attr("class");
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
});