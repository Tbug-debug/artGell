/*사이드 슬라이드 메뉴 시작 */
const btnmenue = document.querySelector('.fa-bars');
const btnclose = document.querySelector('.fa-times');
const menuebar = document.querySelector('.sidemenue');

function openmenue() {
  menuebar.classList.add('sidemenuebar');
}

function closemenue() {
  menuebar.classList.remove('sidemenuebar');
}


btnmenue.addEventListener('click', openmenue);
btnclose.addEventListener('click', closemenue);
/*사이드 슬라이드 메뉴 끝 */

/*가운데 자바스크립트*/
const btnOne = document.querySelector('.plone');
const btnTwo = document.querySelector('.placemid');
const btnTre = document.querySelector('.plthree');

btnOne.dataset.clicked = '1';
btnTwo.dataset.clicked = '1';
btnTre.dataset.clicked = '1';

function changed(){
  btnOne.classList.add('clicked')
  if(this.dataset.clicked){
  btnTwo.classList.remove('clicked')
  btnTre.classList.remove('clicked')
  }
}
  
function changedone(){
  btnTwo.classList.add('clicked')
  if(this.dataset.clicked){
    btnOne.classList.remove('clicked')
    btnTre.classList.remove('clicked')
  }
}

function changedtre(){
  btnTre.classList.add('clicked')
  if(this.dataset.clicked){
    btnTwo.classList.remove('clicked')
    btnOne.classList.remove('clicked')
  }
}

btnOne.addEventListener('click', changed);
btnTwo.addEventListener('click', changedone);
btnTre.addEventListener('click', changedtre);
/*가운데 자바스크립트 끝*/

/*마지막 자바스크립트 시작*/
const btuOne = document.querySelector('.selOne');
const btuTwo = document.querySelector('.selTwo');
const btuTre = document.querySelector('.selTre');
const btuFour = document.querySelector('.selFour');


btuOne.dataset.clicked = '1';
btuTwo.dataset.clicked = '1';
btuTre.dataset.clicked = '1';
btuFour.dataset.clicked = '1';

function changuone(){
  btuOne.classList.add('selecot')
  if(this.dataset.clicked){
  btuTwo.classList.remove('selecot')
  btuTre.classList.remove('selecot')
  btuFour.classList.remove('selecot')
  }
}

function changutwo(){
  btuTwo.classList.add('selecot')
  if(this.dataset.clicked){
  btuOne.classList.remove('selecot')
  btuTre.classList.remove('selecot')
  btuFour.classList.remove('selecot')
  }
}

function changutre(){
  btuTre.classList.add('selecot')
  if(this.dataset.clicked){
  btuOne.classList.remove('selecot')
  btuTwo.classList.remove('selecot')
  btuFour.classList.remove('selecot')
  }
}

function changufour(){
  btuFour.classList.add('selecot')
  if(this.dataset.clicked){
  btuOne.classList.remove('selecot')
  btuTre.classList.remove('selecot')
  btuTwo.classList.remove('selecot')
  }
}


btuOne.addEventListener('click', changuone);
btuTwo.addEventListener('click', changutwo);
btuTre.addEventListener('click', changutre);
btuFour.addEventListener('click',  changufour);
/*마지막 자바스크립트 끝*/

/*타이틀 슬라이드 자바스크립트*/
const btnpuse = document.querySelector('.fa-pause');
const btnplay = document.querySelector('.fa-play');

btnpuse.dataset.clicked = '1';
btnplay.dataset.clicked = '1';

function changeicon(){
  btnpuse.classList.add('color')
  if(this.dataset.clicked){
    btnplay.classList.remove('color')
  }
}

function changeicone(){
  btnplay.classList.add('color')
  if(this.dataset.clicked){
    btnpuse.classList.remove('color')
  }
}

btnpuse.addEventListener('click', changeicon);
btnplay.addEventListener('click', changeicone);
/*타이틀 슬라이드 자바스크립트 끝*/

/*stiky nav 자바스크립트*/
const nav = document.querySelector('.sticky-nav');

function fixNav(){
  const slideInAt = (window.scrollY + window.innerHeight);
  /*스크롤 Y의 값 + 브라우저 안의 인터페이스 높이 => 브라우저 안의 Bottom을 나타낸다.*/
  if(slideInAt <= 2515 ){
    document.body.classList.add('fixed-nav')
  } else{
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav);
/*stiky nav 자바스크립트 끝*/

/*팝업존 자바스크립트 슬라이드 시작*/
const slider = document.querySelector('.endpopup-slider');
const img = document.querySelectorAll('.endpopup-slider img');

const ntxbtn = document.querySelector('.lf');
const prevbtn = document.querySelector('.rt');

let counter = 1;
const size = img[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

prevbtn.addEventListener('click', ()=> {
  if(counter >= img.length - 1) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

ntxbtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

slider.addEventListener('transitionend', ()=>{
  if(img[counter].id === 'firstpt'){
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter = 1;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

slider.addEventListener('transitionend', ()=>{
  if(img[counter].id === 'lastpt'){
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter = 1;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
/*팝업존 자바스크립트 슬라이드 끝*/

/*slick slide 제이쿼리*/
$(document).ready(function(){
    $('.bigimg').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:true,
        draggable:true,
        fade: true,
        autoplaySpeed: 2000,
        autoplay:true,
        prevArrow: $('.fa-long-arrow-alt-left'),
        nextArrow: $('.fa-long-arrow-alt-right'),
    });
  });

  $('.fa-pause').on('click', function() {
    $('.bigimg').slick('slickPause');
});


$('.fa-play').on('click', function() {
  $('.bigimg').slick('slickPlay');
});

  $(document).ready(function(){
    $('.midsliderOne').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll:1,
        draggable:false,
        arrows: true,
        prevArrow: $('.fa-arrow-left'),
        nextArrow: $('.fa-arrow-right'),
    });
  });

  $(document).ready(function(){
    $('.uping').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        draggable:true,
        vertical:true,
        arrows: true,
        prevArrow: $('.fa-chevron-up'),
        nextArrow: $('.fa-chevron-down'),
    });
  });


  $(document).ready(function(){
    $('.endslider-cont').slick({
        slidesToShow: 8,
        slidesToScroll:8,
        draggable:true,
        arrows: true,
        prevArrow: $('.fa-chevron-left'),
        nextArrow: $('.fa-chevron-right'),
    });
  });
/*slick slide 제이쿼리*/