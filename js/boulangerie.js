
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

});
