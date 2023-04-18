

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function(){
    $('.visual .slide').slick({
       arrows: false,  //화살표
       dots: true, //인디케이트 해제
       fade: true,//페이드효과
       autoplay:true, //자동재생
       autoplaySpeed: 5000, //재생시간
       pauseOnHover: false,
       pauseOnFocus: false   
   });
});

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})

// 헤더이벤트
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
})

function fixHeader(){
    if(scrollValue > 200) {
        $('header').addClass('on');
    } else {$('header').removeClass('on');}
}

$(function(){
    $('header .open').on('click', function(){
        $('body').css({'overflow':'hidden'});
        $('header .bg').css({'display':'block'});
        $('header nav').addClass('on');
    });
    $('header .close, header .bg').on('click', function(){
        $('body').css({'overflow':'auto'});
        $('header .bg').css({'display':'none'});
        $('header nav').removeClass('on');
    });
});