// header footer contact back_top
$(function(){
  $("#head").load("./header.html?v="+new Date().getTime());
  $("#foot").load("./footer.html?v="+new Date().getTime());
  $("#contact").load("./contact.html?v="+new Date().getTime());
  setTimeout(() => {
      $(window).scroll(function () {
          if ($(window).scrollTop() > $("#banner").height()){
              $(".back_top").fadeIn(1000);
          }
          else
          {
              $(".back_top").fadeOut(1000);
          }
      })
  }, 16.7);
});