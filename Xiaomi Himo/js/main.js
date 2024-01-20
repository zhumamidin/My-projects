$(function () {
	$('.bike__slider, .slider__items').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		fade: true,
	})

	$('.header__menu, .bike__column').on('click', 'a', function (event) {
		event.preventDefault();
		let id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	})
})
