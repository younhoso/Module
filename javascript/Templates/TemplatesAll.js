import $ from "jquery";
import {TweenMax, Power2, TimelineLite, TweenLite} from "gsap";

$(() => {
  // tabs
  $('.Header__list .list').on('click', function() {
    var index = $('.Header__list .list').index(this);

    $('.main__Content--list:eq('+index+')').siblings().hide();
    $('.main__Content--list:eq('+index+')').fadeIn(900);

    $('.list').find('a').removeClass('active');
    $('.list:eq('+index+')').find('a').addClass('active');
  });

  // search 아이콘 클릭 팝업 창

  // var $search = $('.js-mobile-search--modal');
  // $('.js-search').on('click', function(){
  //   // $(this).toggleClass('active');
  //   TweenMax.to($search, 0.2,{
  //     width: '100%',
  //     height: '100%',
  //     opacity: '1'
  //   });
  //   $search.find('.js-focus').focus();
  // });

  // $('.js-mobile-search--modal').on('click', function(e) {
  //   //현재 클릭한 HTML
  //   e.target;
  //    //현재 이벤트가 달린 곳 (on 이벤트 왼쪽에 있는애)
  //   e.currentTarget

  //   if(e.target === e.currentTarget) {
  //     TweenMax.to($search, 0.2,{
  //       width: '100%',
  //       height: '0',
  //       opacity: '0'
  //     });
  //   }
  // });

  // TemplatesAll페이지 햄버거 버튼 오픈
  $('.js-modile-side__hamburger').on('click', function(){
    var $side__menu =  $('.js-side__menu');
    $side__menu.addClass('active');
  });

  // TemplatesAll페이지 햄버거 버튼 바탕화면 닫음
  $('.js-side__menu').on('click', function(e){
    if(e.target === e.currentTarget){
      $(this).removeClass('active');
    }
  });

  // index페이지 PC 스크롤 Top으로 이동
  $(window).on('scroll', function() {
    //삼항연산자를 이용한 토글 방식
    var windowBottom = $(window).height() + $(window).scrollTop();
    windowBottom === $(document).height() ? $('.js-to-top').fadeOut() : $('.js-to-top').fadeIn()

    $('.js-up').on('click', function() {
      var $body = $('body,html');
      TweenMax.to($body, 0.2,{
        scrollTop : 0
      });
    });

    $('.js-down').on('click', function() {
      var $body = $('body,html');
      TweenMax.to($body, 0.5,{
        scrollTop: $(window).height() + $(document).height()
      });
    });
  });
});