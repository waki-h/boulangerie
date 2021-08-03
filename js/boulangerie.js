
$(function() {

  $("#drawerToggle").click(function(){
    $(this).toggleClass("open");
    $(".spNav").toggleClass("sideOpen");
    if($(this).hasClass("open") == false) {　　　　　　　　　                 //もしopenclassが付いてなかったら
      $('body,html').css({"overflow":"visible","height":"auto"});　　　　　　//背景動く
    }else {　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//そうじゃない時は
      $('body,html').css({"overflow":"hidden","height":"100%"});   　　　　//背景動かない
    }

  });


  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 900) {
      $("#drawerToggle").removeClass("open");
      $(".spNav").removeClass("sideOpen");
      $('body,html').css({"overflow":"visible","height":"auto"});
    }
  });


  $(window).scroll(function () {
    $(".aboutText,.shippingText").each(function () {
      var elemPos = $(this).offset().top;                               //要素の位置を取得
      var scroll = $(window).scrollTop();                               //スクロール位置を取得
      var windowHeight = $(window).height();                            //画面幅を取得（画面の下側に入ったときに動作させるため)
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();

});
