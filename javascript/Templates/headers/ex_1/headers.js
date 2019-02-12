import $ from "jquery";
import {TweenMax, Power2, TimelineLite} from "gsap";


      $('#header').load('./html/include/header.html');
      $('#footer').load('./html/include/footer.html');
      
      $('.header').on({
        mouseenter:function(){
          $('.header').addClass('active');
          $('.header--text a').fadeIn(200);
          $('.header__owner--tit').css({
            'display':'inline-block',
            'opacity': 1
            }).fadeIn(200)
        },
        mouseleave:function(){
          $('.header').removeClass('active');
          $('.header--text a').fadeOut(200);
          $('.header__owner--tit').css({
            'opacity': 0
            }).fadeOut(200);
          
        }
      });
      
      // Headers ex_1 애니메이션
      $(document).on('click', '.header__hover', function(){
        var index = $('.header__hover').index(this);
        var Countheight = $('.header__hover').height();
        var result = Countheight * index;
            result = result + 12;
            TweenMax.to($('.bar__line'),0.2,{
              top: result,
            })
      });