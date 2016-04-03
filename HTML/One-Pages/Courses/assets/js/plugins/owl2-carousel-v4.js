var Owl2Carouselv4 = function () {

	return {

		// Owl Carousel v4
		initOwl2Carouselv4: function () {
			$('.owl2-carousel-v4').owlCarousel({
				loop: true,
				// autoplay: true,
				// autoplayTimeout: 10000,
				// autoplayHoverPause: true,
				dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
				margin:30,
		    responsive: {
		        0:{
	            items: 1,
		        },
		        668:{
	            items: 2,
		        },
		        1000:{
	            items: 3,
		        },
		        1200:{
	            items: 3,
		        }
		    }
			})
		}

	};

}();
