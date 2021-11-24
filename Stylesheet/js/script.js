
"use strict"
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


const tabBtn1 = document.querySelector("#tab-btn_1");
const tabBtn2 = document.querySelector("#tab-btn_2");
const tabBtn3 = document.querySelector("#tab-btn_3");

const tab1 = document.querySelector("#tab_01");
const tab2 = document.querySelector("#tab_02");
const tab3 = document.querySelector("#tab_03");

const hideShow1 = document.querySelector("#hide_show_1");
const hideShow2 = document.querySelector("#hide_show_2");
const hideShow3 = document.querySelector("#hide_show_3");
const hideShowPrice = document.querySelector("#hide_show_price");
const hide1 = document.querySelector("#hide_1");
const hide2 = document.querySelector("#hide_2");
const hide3 = document.querySelector("#hide_3");
const colSlide = document.querySelector("#col_slide");

tabBtn1.addEventListener("click", tab1Activate);
tabBtn2.addEventListener("click", tab2Activate);
tabBtn3.addEventListener("click", tab3Activate);

hideShow1.addEventListener("click", hideActiveText1);
hideShow2.addEventListener("click", hideActiveText2);
hideShow3.addEventListener("click", hideActiveText3);
hideShowPrice.addEventListener("click", hideActivePrice);


function tab1Activate() {
   tab1.classList.add("_active");
   tab2.classList.remove("_active");
   tab3.classList.remove("_active");

   tabBtn1.classList.add("_active");
   tabBtn2.classList.remove("_active");
   tabBtn3.classList.remove("_active");

   $('.auto__slider').slick("setPosition");
   $('.auto__slider').slick("setPosition");
}


function tab2Activate() {
   tab1.classList.remove("_active");
   tab2.classList.add("_active");
   tab3.classList.remove("_active");

   tabBtn1.classList.remove("_active");
   tabBtn2.classList.add("_active");
   tabBtn3.classList.remove("_active");

   $('.auto__slider').slick("setPosition");
   $('.auto__slider').slick("setPosition");
}


function tab3Activate() {
   tab1.classList.remove("_active");
   tab2.classList.remove("_active");
   tab3.classList.add("_active");

   tabBtn1.classList.remove("_active");
   tabBtn2.classList.remove("_active");
   tabBtn3.classList.add("_active");

   $('.auto__slider').slick("setPosition");
   $('.auto__slider').slick("setPosition");
}

function hideActiveText1() {
   hide1.classList.add("_active");
   hideShow1.classList.add("_hide");
}
function hideActiveText2() {
   hide2.classList.add("_active");
   hideShow2.classList.add("_hide");
}
function hideActiveText3() {
   hide3.classList.add("_active");
   hideShow3.classList.add("_hide");
}
function hideActivePrice() {
   colSlide.classList.add("_active");
   hideShowPrice.classList.add("_hide")
}

