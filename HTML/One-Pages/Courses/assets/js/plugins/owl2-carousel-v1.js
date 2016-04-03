var Owl2Carouselv1 = function () {

	return {

		// Owl Carousel v1
		initOwl2Carouselv1: function () {
			$('.owl2-carousel-v1').owlCarousel({
				items: 3,
				margin: 30,
				loop: true,
				autoplay: true,
				autoplayTimeout: 10000,
				// autoplayHoverPause: true,
				responsive: {
					0:{
						items: 1
					},
					768:{
						items: 2
					},
					992:{
						items: 2
					},
					1200:{
						items: 3
					}
				},
			})
		}

	};

}();
