var imgNumPrev = 0;
function changeBg() {


var imgNum = Math.floor(Math.random() * 10);

// if (imgNum == imgNumPrev) {
//     imgNum = Math.floor(Math.random() * 10);
//     if (imgNum == imgNumPrev) {
//         imgNum = Math.floor(Math.random() * 10);
//     }
// }

while ( imgNum == imgNumPrev ) {
    imgNum = Math.floor(Math.random() * 10);
    break;
}

document.getElementById('hero_bg').style = "background-image: url(img/poster_" + imgNum + ".jpg); "

document.getElementById('hero_bg').classList.remove('effect_fade_in');
void document.getElementById('hero_bg').offsetWidth; //undefined로 바꿔버림
document.getElementById('hero_bg').classList.add('effect_fade_in');

imgNumPrev = imgNum;

}

var changeHero = setInterval(changeBg, 5000);


// FAQ Accodion

// 아코디온 메뉴 오픈 상태 변수


// var faqLi = document.getElementsByClassName('faq_li');
// var faqBtn = document.getElementsByClassName('faq_q_btn');
// var faqQ = document.getElementsByClassName('faq_q');

// var faqOpenState = [];

// for (i=0; i<faqLi.length; i++) {
//    faqOpenState[i] = false;
// }

// function accOpen(target) {

//    for (i=0; i<faqLi.length; i++) {

//       if ( target != i) { 
//          faqLi[i].style = "max-height:60px;";
//          faqBtn[i].style = "transform:rotate(0deg);";
//          faqQ[i].style = "background-color: rgb(34,34,34);"
//          faqOpenState[i] = false;
//       }
//    }

//    if (faqOpenState[target] == true) {

//          faqLi[target].style = "max-height:60px;";
//          faqBtn[target].style = "transform:rotate(0deg);";
//          faqQ[target].style = "background-color: rgb(34,34,34);"

//          faqOpenState[target] = false;
//    } else
//       {
//          faqLi[target].style = "max-height:600px;"; 
//          faqBtn[target].style = "transform:rotate(45deg);";
//          faqQ[target].style = "background-color:rgb(229, 9, 20);"
//          faqOpenState[target] = true;

//       }

// }

// footer language select
function languageChange() {

   if (document.getElementById('language').value == "english") {
   document.location = "https://www.netflix.com/kr-en/";
   }
   else {
   document.location = "https://www.netflix.com/kr/"
   }
}

// light & dark mode

function changeMode() {
  
   if(document.querySelector('input[name="mode-check"]').checked) {
      document.body.style = "background-color: rgb(255,255,255); color:rgb(0,0,0);"
      document.querySelector('.hero_wrap').style = "background-color: rgba(255,255,255,0.4);  "
      document.querySelector('.faq_ul').style = "color: rgb(255,255,255);  "

      document.querySelector('.tv_right img').src = "img/tv_trans.png"

      for (let i=0; i<15; i++) {
         document.querySelectorAll('.footer_menu_li > a')[i].style = "color:rgb(34,34,34);"
      }

      document.getElementById('language_form').style= "border:1px solid rgb(34,34,34);"
      document.getElementById('language').style = "background-color: rgb(255,255,255); color:rgb(34,34,34);"
      document.querySelector('#language_form img').src = "img/globe_dark.svg"
      
   }
   else {
      document.body.style = "background-color: rgb(0,0,0); color:rgb(255,255,255);"
      document.querySelector('.hero_wrap').style = "background-color: rgba(0,0,0,0.6);"
      document.querySelector('.tv_right img').src = "img/tv_dark.png"

      for (let i=0; i<15; i++) {
         document.querySelectorAll('.footer_menu_li > a')[i].style = "color:rgb(255,255,255);"
      }

      document.getElementById('language_form').style= "border:1px solid rgb(255,255,255);"
      document.getElementById('language').style = "background-color: rgb(0,0,0); color:rgb(255,255,255);"
      document.querySelector('#language_form img').src = "img/globe.svg"
   }
}

// feature => scroll에 따른 변화
let bodyScrollY; // 전체 화면의 스크롤 탑 값
let pageH = document.documentElement.clientHeight; // 전체 페이지 높이값

let tvY = document.querySelector('.tv_wrap').offsetTop; // Hero 에니메이션 렌더링 높이

let mobileY = document.querySelector('.offline_wrap').offsetTop; // Way 에니메이션 렌더링 높이

let deviceY = document.querySelector('.device_wrap').offsetTop; // Design 1 에니메이션 렌더링 높이

function scrollEvent() {
   bodyScrollY  = window.pageYOffset;

   // tvY Text Animation
   if (bodyScrollY > tvY - pageH + 120) {
      document.querySelector('.tv_title').style = "animation: fade_in_up 2s forwards;";
      document.querySelector('.tv_subtitle').style = "animation: fade_in_up 2s forwards;";
   }

   // mobileY Text Animation
   if (bodyScrollY > mobileY - pageH + 120) {
      document.querySelector('.offline_title').style = "animation: fade_in_down 3s forwards;";
      document.querySelector('.offline_subtitle').style = "animation: fade_in_down 3s forwards;";
   }

   // deviceY Text Animation
   if (bodyScrollY > deviceY - pageH + 120) {
      document.querySelector('.device_title').style = "animation: fade_in_up 3s forwards;";
      document.querySelector('.device_subtitle').style = "animation: fade_in_up 2s forwards;";
   }
}


// 스크롤 nav
document.addEventListener('scroll', () => {

   // Scroll Down
   function gnbScrollDown() {
       document.querySelector('.gnb').style = "background-color: rgba(200,200,200,0.2); box-shadow: 0 0 8px 0 rgba(100,100,100,0.8); transition: all 0.6s ease;";

   }
   
   // Scroll Up
   function gnbScrollUp() {
      document.querySelector('.gnb').style ="background-color:transparent; transition: all 0.6s ease;";

   }

   // 조건문 실행
   if (window.scrollY > 80) {
       gnbScrollDown();
       }
   
       else {
          gnbScrollUp();
           }
   });

