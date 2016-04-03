var Owl2Carouselv1 = function () {
	return {
		// Owl Carousel v1
		initOwl2Carouselv1: function () {
			jQuery('.owl2-carousel-v1').owlCarousel( {
				loop: true,
				margin: 0,
        responsive: {
          0: {
            items: 1
          },
        },
        nav: false,
			});
		}
	};
}();