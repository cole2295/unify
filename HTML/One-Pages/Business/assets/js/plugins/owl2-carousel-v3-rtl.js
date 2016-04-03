var Owl2Carouselv3 = function () {
	return {
		// Owl Carousel v3
		initOwl2Carouselv3: function () {
			jQuery('.owl2-carousel-v3').owlCarousel({
				margin: 20,
				loop: true,
				responsiveClass: true,
		    responsive: {
	        0:{
	        	items: 2,
	        },
	        500:{
	        	items: 3,
	        },
	        650:{
            items: 4,
	        },
	        1000:{
            items: 5,
	        },
	        1200:{
            items: 6,
	        }
		    },
		    rtl: true,
			})
		}
	};
}();