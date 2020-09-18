// Слайдер
$(document).ready(function () {
  $(".news__slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // Бургер меню
  let burgerMenu = (document.querySelector(".header-burger").onclick = () => {
    // Смена линий на 45deg
    document
      .querySelector(".header__burger")
      .classList.toggle("header__burger--active");
    // Навигация
    document
      .querySelector(".header__nav")
      .classList.toggle("header__nav--active");
    // анти-скрол
    document.querySelector("body").classList.toggle("lock");
  });

  // Получаем информацию формы
  let formInfo = (document.querySelector(
    ".contact-form__btn button"
  ).onclick = (e) => {
    e.preventDefault();
    // data,time,name,tel.
    let formData = document.querySelector(".contact-form__data input").value;
    let formTime = document.querySelector(".contact-form__time input").value;
    let formName = document.querySelector(".contact-form__name input").value;
    let formTel = document.querySelector(".contact-form__number input").value;
    console.log(formData, " ", formTime, " ", formName, " ", formTel);
  });
});
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});