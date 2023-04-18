// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//01 header scroll방향 이벤트 //
$(function() {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        
        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        if (nowScrollTop > prevScrollTop){ $('header').addClass('active'); } 
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
    });
});


//2.스크롤라 호출
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
});


//3.배경색변경
$(function(){
    gsap.timeline({ //시간 순서에 따라에 진행되도로 만듬
    scrollTrigger:{
    trigger:'.con03',//스크롤 대상
    start:'0% 80%',//트리거 대상의 시작지점, 화면의 시작지점
    end:'100% 100%',//트리거 대사이 끝나는 시점, 화면의 끝나는 시점
    scrub: 1, //(되감기) 
    //markers: true, //시작위치 끝위치 확인 가능한 마커 
    }
 })
// gsap.fromTo()메서드는 시작점과 끝나는 점을 지정하는 애니메니션 -> 
// gsap.fromTo("타켓",{시작속성: 속성값...},{끝나는 속성: 속성값..})
.fromTo('.con03',{'clip-path':'circle(10% at 50% 100%)'},
{'clip-path':'circle(90% at 50% 70%)', ease:'none',duration:'10',background:'#333'}
)})    



//4.마우스에 반응하는 오브젝트
$(function(){
    // 1.페이지로딩시 제일상단으로 스크롤이동
       $(".con04").stop().animate({"scrollTop":0},0,"swing");
   
       //1.변수 scroll에 현재 scrollTop의 위칫값 저장하고 h1에 텍스트로 출력
       $(window).on("scroll", function(){
           var scroll = $(this).scrollTop();
          //  $("h1").text(scroll);
   
  
      //화면에서 마우스 무브시 박스안에 콘텐츠 움직이기
        $(".con04").on("mousemove", function(e){
          var posX = e.pageX/50; //변수 posX에는 현재 화면상의 마우스커서의 X축위치를, 
          var posY = e.pageY/90; //변수 posY에는 현재 화면상의 마우스커서의 Y축위치를 저장하고 이때 해당수치의 변화폭을 죽이기위해 각각100과 150으로 나눠줌
         
          $(".obj11").css({"left":30-posX, "top":+0-posY});
          $(".obj12").css({"left":220-posX, "top":260-posY});
          $(".obj13").css({"left":540+posX, "top":190-posY});
          $(".obj14").css({"left":830+posX, "top":10+posY});
          $(".obj15").css({"left":1170-posX, "top":500-posY});
        
             });
        });
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





  
