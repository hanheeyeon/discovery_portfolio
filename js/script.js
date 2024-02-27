$(document).ready(function(){
    //배너 스와이퍼
        var swiper = new Swiper(".mySwiper", {
            effect: "fade",
            loop:true,
            autoplay:{
                delay:3000
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });

    //sec-2 스와이퍼
    var swiper = new Swiper(".youSwiper", {
        effect: "",
        loop:true,
        autoplay:{
            delay:4000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // 서브메뉴
    $("#hamburger").click(function(){
        //햄버거 버튼 클릭시 이벤트
        $(".menu_side").show();
        $("#hamburger").hide();
        $(".dimmed").show();
        $(".btn_close").click(function(){
            //닫기 버튼 클릭시 이벤트
            $(".menu_side").hide();
            $("#hamburger").show();
            $(".dimmed").hide();
        });
    });
    
});