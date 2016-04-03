var Owl2Carouselv3 = function () {
	return {
		// Owl Carousel v3
		initOwl2Carouselv3: function () {
			$('.owl2-carousel-v3').owlCarousel({
				margin: 5,
				loop: true,
				autoplay: true,
				autoplayTimeout: 7000,
				autoplayHoverPause: true,
				items: 4,
				responsiveClass: true,
		    responsive: {
		        0:{
		        	items: 1,
		        },
		        550:{
	            items: 2,
		        },
		        1000:{
	            items: 3,
		        },
		        1200:{
	            items: 4,
		        }
		    }
			})
		}
	};
}();
