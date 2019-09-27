$(function () {

	'use strict';

	//start header
	$('.header').height($(window).height());
	$(window).resize(function () {
		$('.header').height($(window).height());
	})

	$('li').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active')
	})
	// end header

	// start scrolling
	$('li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},1000);
	});
	// end scrolling

	//start slider
	(function autoSlider() { 

		$('.slider .t-active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('t-active').next().addClass('t-active').fadeIn(1000);
					
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('t-active');
					$('.slider div').eq(0).addClass('t-active').fadeIn(1000);
					autoSlider();
				});
			}
		})
	}());
	//end slider


});