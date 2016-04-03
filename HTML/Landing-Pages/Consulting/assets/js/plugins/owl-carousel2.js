var OwlCarousel = function () {
	return {
		// Owl Carousel
		initOwlCarousel: function () {
			$(".testimonials-v7").owlCarousel({
				loop: true,
				margin: 30,
				responsive: {
					0:{
						items: 1
					},
				},
				nav: true,
				dots: false,
				navText: ["",""],
				navContainerClass: 'owl-buttons',
			});

			$(".team-v6").owlCarousel({
				loop: true,
				margin: 30,
				responsive: {
					0:{
						items: 1
					},
					400:{
						items: 2
					},
					600:{
						items: 3
					},
					992:{
						items: 4
					}
				},
				nav: false,
				dots: false,
			});

			$(".owl-clients-v5").owlCarousel({
				items: 3,
				autoplay: true,
				loop: true,
				margin: 30,
				responsive: {
					0:{
						items: 2
					},
					400:{
						items: 3
					},
					600:{
						items: 5
					},
					992:{
						items: 6
					},
					1200:{
						items: 8
					}
				},
				nav: false,
				dots: false,
			});
		}
	};
}();
