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

    // const tabList = document.querySelectorAll(".tab li");

    //     tabList[0].addEventListener("click",function(){
    //         for(let i=0;i<tabList.length;i++){
    //             tabList[i].classList.remove("on");
    //         };
    //         tabList[0].classList.add("on");
    //     });
    //     tabList[1].addEventListener("click",function(){

    //         for(let i=0;i<tabList.length;i++){
    //             tabList[i].classList.remove("on");
    //         }

    //         tabList[1].classList.add("on");

    //     });
    //     tabList[2].addEventListener("click",function(){

    //         for(let i=0;i<tabList.length;i++){
    //             tabList[i].classList.remove("on");
    //         }
    //         tabList[2].classList.add("on");
            
    //     });
    //     tabList[3].addEventListener("click",function(){

    //         for(let i=0;i<tabList.length;i++){
    //             tabList[i].classList.remove("on");
    //         }
    //         tabList[3].classList.add("on");
    //     });




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