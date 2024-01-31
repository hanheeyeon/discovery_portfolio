$(document).ready(function(){
    //스와이퍼
    //메인상단 hero영역 슬라이더
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

    var swiper = new Swiper(".youSwiper", {
        effect: "",
        loop:true,
        autoplay:{
            delay:3000
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
    
    // $('.main-menu li').mouseenter(function(){
    //     let result = $(this).attr('data-tab');
    //     $('.sub-menu').removeClass('active');
    //     $(`#${result}`).addClass('active');

    //     //서브메뉴박스도 보이게 처리
    //     $('.sub-menu-box').addClass('active');
    // });

    // $('.sub-menu-box').mouseleave(function(){
    //     $(this).removeClass('active');
    //     $('.header-area,.header-logo svg').removeClass('active');
    // });
});