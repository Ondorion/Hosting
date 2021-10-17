$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.header-right').toggleClass('header-right--active');
  });

  $('.header-content__item-link').on('click', function (e) {
    e.preventDefault();
    $('.header-content__item-link').removeClass('header-content__item--active');
    $(this).addClass('header-content__item--active');
    $('.header-content__subinfo__item').removeClass('header-content__subinfo__item--active');
    $($(this).attr('href')).addClass('header-content__subinfo__item--active');
     
  });

  $('.package__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.package__tabs-link').removeClass('package__tabs-link--active');
    $(this).addClass('package__tabs-link--active');
    $('.package__info').removeClass('package__info--active');
    $($(this).attr('href')).addClass('package__info--active');

  });


});