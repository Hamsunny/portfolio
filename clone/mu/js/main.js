//gnb
$(function(){
    $('.gnb li a').on('mouseenter focus',function(){
        var bar = $(this).position().left; //각각 gnb li a의 position left값을 bar에 저장
        var width = $(this).width(); //각각 gnb li a의 width 값을 width에 적용

        $('span.bar').css({'left': bar+'px','width': width + 'px','opacity':1}); //span.bar의 css를 각각의 변수값으로 변경하고 opacity변경

    });
    $('.gnb li a').on('mouseleave',function(){
        $('span.bar').css({'left':'0','width':0,'opacity':0})
    })
});


//2.스크롤라 호출
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: true
    })
});

//3.배경색변경
$(window).on('scroll resize',function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor(){
        if(scrollTop > 1400){
            $('body').addClass('on');
        }else{
            $('body').removeClass('on');
        }
        if(scrollTop > 2700){
            $('body').removeClass('on');
        }
    }
});

//5.햄버거메뉴

$(function(){
    $('.menuOpen button.open ').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })
});

//6. svg 길이갑 구하기

// $(function(){
//     $('.svgAni').find('path').each(function(ii, path){
//         var length = path.getTotalLength();
//         alert(length);
//     })
// })
1564