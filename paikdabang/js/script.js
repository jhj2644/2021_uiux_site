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


    // let winW = window.innerWidth;

    // menuHover();
    // window.addEventListener("resize",function(){
    //     winW = window.innerWidth;
    //     menuHover();
    //     console.log(winW)
    // });

    // function menuHover(){

    //     if(winW < 700){
    //         $(".submenu").hide();
    //     }

    //     $(".gnb").mouseenter(function(){
    //         if(win < 700){
    //             return false;
    //         }
    //         $(".submenubar").stop().animate({top:100});
    //         $(".submenu").fadeIn();
    //         $(".gnb .submneu").css("height",140)
    //     });
    //     $(".gnb").mouseleave(function(){
    //         $(".submenubar").stop().animate({top:"-100px"});
    //         $(".submenu").fadeOut();
    //     });
    // };


    
        let winW = window.innerWidth;
        

        menuHover();

        window.addEventListener("resize",function(){
            winW = window.innerWidth;
            menuHover();

            console.log(winW)
            
        })

        
        function menuHover(){
        
            if(winW < 700){
                $(".submenu1").hide();
            }


         $(".gnb").mouseenter(function(){
                if(winW < 700){
                return false;
                }
                $(".submenubar").stop().animate({top:100});
                $(".submenu1").fadeIn();
                $(".gnb .submenu1").css("height",200)

            });
            $(".gnb").mouseleave(function(){
                $(".submenubar").stop().animate({top:"-100px"});
                $(".submenu1").fadeOut();
            });
        }
    







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

    
    // $("#header_top").hover(function(){
    //     $(".submenubar").animate({top:100})
    // },function(){
    //     $(".submenubar").animate({top:0})
    // })

    
    //subpage
    $("ul>li").click(function(){
        let num = $(this).index();

        $("ul>li").removeClass();
        $(this).addClass("on");

        $(".maincontent>div").hide();
        $(".maincontent>div").eq(num).show();
    })

    

    
    


});


