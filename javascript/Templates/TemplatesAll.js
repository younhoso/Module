import $ from "jquery";
import {TweenMax, Power2, TimelineLite} from "gsap";

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

  var $search = $('.js-mobile-search--modal');
  $('.js-search').on('click', function(){
    // $(this).toggleClass('active');
    TweenMax.to($search, 0.2,{
      width: '100%',
      height: '100%',
      opacity: '1'
    });
    $search.find('.js-focus').focus();
  });

  $('.js-mobile-search--modal').on('click', function(e) {
    //현재 클릭한 HTML
    e.target;
     //현재 이벤트가 달린 곳 (on 이벤트 왼쪽에 있는애)
    e.currentTarget

    if(e.target === e.currentTarget) {
      TweenMax.to($search, 0.2,{
        width: '100%',
        height: '0',
        opacity: '0'
      });
    }
  });

  // $('.Side__Menu--list .list').on('click', function(){

  //   // $(this).siblings().find('.Side__Menu--sapn').removeClass('active');
  //   // $(this).find('.Side__Menu--sapn').addClass('active');
  // });
});