$(document).ready(function () {
   $('.auto__slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      dots: false,

      responsive: [
         {
            breakpoint: 1024,
            settings: {
               dots: true,

            }
         },
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true,

            }
         }
      ]
   });

   $("#tab-btn_1").click(function () {
      $("#tab_01").addClass("_active");
      $("#tab_02").removeClass("_active");
      $("#tab_03").removeClass("_active");
      $("#tab-btn_1").addClass("_active");
      $("#tab-btn_2").removeClass("_active");
      $("#tab-btn_3").removeClass("_active");
      $('.auto__slider').slick("setPosition");
      $('.auto__slider').slick("setPosition");

   })
   $("#tab-btn_2").click(function () {
      $("#tab_02").addClass("_active");
      $("#tab_01").removeClass("_active");
      $("#tab_03").removeClass("_active");
      $("#tab-btn_1").removeClass("_active");
      $("#tab-btn_2").addClass("_active");
      $("#tab-btn_3").removeClass("_active");
      $('.auto__slider').slick("setPosition");
      $('.auto__slider').slick("setPosition");

   })
   $("#tab-btn_3").click(function () {
      $("#tab_01").removeClass("_active");
      $("#tab_02").removeClass("_active");
      $("#tab_03").addClass("_active");
      $("#tab-btn_1").removeClass("_active");
      $("#tab-btn_2").removeClass("_active");
      $("#tab-btn_3").addClass("_active");
      $('.auto__slider').slick("setPosition");
      $('.auto__slider').slick("setPosition");


   })
   $("#hide_show_1").click(function func_1() {
      $("#hide_1").slideToggle("fast");
      $("#p_1").css("marginBottom", "0px")
   });
   $("#hide_show_2").click(function func_2() {
      $("#hide_2").slideToggle("fast");
      $("#p_2").css("marginBottom", "0px")
   });
   $("#hide_show_3").click(function func_3() {
      $("#hide_3").slideToggle("fast");
      $("#p_3").css("marginBottom", "0px")
   });
   $("#hide_show_price").click(function func_slide_col() {
      $("#col_slide").slideToggle("slow");
   });
})
