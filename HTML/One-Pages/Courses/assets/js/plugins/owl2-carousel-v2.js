var Owl2Carouselv2 = function () {

	return {

		// Owl Carousel v2
		initOwl2Carouselv2: function () {
			$('.owl2-carousel-v2').owlCarousel({
				items: 4,
				margin: 30,
				loop: true,
				nav: true,
				navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
        responsive: {
					300:{
            items: 1
          },
          768:{
            items: 2
          },
          992:{
            items: 3
          },
          1200:{
            items: 4
          },
        },
			})
		}

	};

}();
