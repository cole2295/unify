var Owl2Carouselv5 = function () {

	return {

		// Owl Carousel v5
		initOwl2Carouselv5: function () {
			$('.owl2-carousel-v5').owlCarousel({
				loop: true,
				items:2,
				nav:false,
				margin: 30,
				autoplay: true,
				autoplayTimeout: 7000,
				autoplayHoverPause: true,
		    responsive: {
		        0:{
	            items: 1,
		        },
		        600:{
	            items: 1,
		        },
		        1000:{
	            items: 2,
		        },
		        1200:{
	            items: 2,
		        }
		    }
			})
		}

	};

}();
