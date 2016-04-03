var OwlCarousel = function () {
	return {
		// Owl Carousel
		initOwlCarousel: function () {
			// Owl Slider v4-whatsnew
			$(".owl-slider-v4-whatsnew").owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					0:{
						items: 1
					},
					992:{
						items: 2
					},
					1200:{
						items: 3
					},
					1300:{
						items: 4
					}
				},
				nav: false,
				dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
				rtl: true
			});

			// Owl Slider v4-whatsnew
			$(".owl-slider-v4-hiw").owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					0:{
						items: 1
					},
				},
				nav: true,
				dots: false,
				navText: ["<span class='glyphicon glyphicon-chevron-right'></span>","<span class='glyphicon glyphicon-chevron-left'></span>"],
				navContainerClass: 'owl-buttons',
				rtl: true
			});
		}
	};
}();
