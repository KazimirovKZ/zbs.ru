$(document).ready(function () {

	$('.slider_wrap').slick({
		slidesToShow: 1,
		fade: false,
		nextArrow: '<button type="button" class="slider_wrap_slick-next"><img src="/img/slider_next.svg" alt=""></button>',
		prevArrow: '<button type="button" class="slider_wrap_slick-prev"><img src="/img/slider_prev.svg" alt=""></button>',
		draggable: false,
		responsive: [
			{
				breakpoint: 850,
				settings: {
					arrows: false,
				}
			},
		]
	});

	$(".slider_wrap").on('afterChange', function (event, slick, currentSlide) {
		$("#cp").text(currentSlide + 1);
	});

	$('.slider_accessories').slick({
		infinite: true,
		slidesToShow: 3,
		cssEase: 'linear',
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slider_accessories_slick-prev"><img src="/img/accessories_prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slider_accessories_slick-next"><img src="/img/accessories_next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 850,
				settings: {
					arrows: false,
				}
			},
		]
	}).on('afterChange', function(event, slick){	event.stopPropagation();});



});