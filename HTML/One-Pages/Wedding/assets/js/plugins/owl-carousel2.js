var OwlCarousel = function () {
	return {
		// Owl Carousel
		initOwlCarousel: function () {
			// Owl Slider v4-banner
			// jQuery(".owl-slider-v4-banner").owlCarousel({
			// 	loop: true,
			// 	margin: 0,
			// 	responsive: {
			// 		0:{
			// 			items: 1
			// 		},
			// 	},
			// 	nav: true,
			// 	dots: true,
			// 	navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
			// 	navContainerClass: 'owl-buttons',
			// 	dotsClass: 'owl-pagination',
			// 	dotClass: 'owl-page',
			// });

			// Owl Slider v4-gallery
			// jQuery(".owl-slider-v4-gallery").owlCarousel({
			// 	loop: true,
			// 	margin: 0,
			// 	responsive: {
			// 		0:{
			// 			items: 1
			// 		},
			// 	},
			// 	nav: true,
			// 	dots: false,
			// 	navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
			// 	navContainerClass: 'owl-buttons',
			// });

			// Owl Slider v4-testimonials
			jQuery(".owl-slider-v4-testimonials").owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					0:{
						items: 1
					},
				},
				nav: true,
				dots: false,
				navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
			});

			// Owl Slider v4-news
			jQuery(".owl-slider-v4-news").owlCarousel({
				loop: true,
				margin: 0,
				responsive: {
					0:{
						items: 1
					},
					550:{
						items: 2
					},
					992:{
						items: 3
					},
					1200:{
						items: 4
					},
					1300:{
						items: 4
					}
				},
				nav: true,
				dots: false,
				navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
			});
		}
	};
}();
