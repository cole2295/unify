var OwlCarousel = function () {
	return {
		initOwlCarousel: function () {
			$('.advices-slider').owlCarousel({
        loop: true,
        margin: 15,
        responsive: {
					300:{
            items: 1
          },
          500:{
            items: 2
          },
          768:{
            items: 3
          },
          1200:{
            items: 4
          }
        },
        nav: true,
        dots: false,
				navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
			});
			$('.about-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
					1:{
            items: 1
          },
        },
        nav: true,
        dots: false,
				navText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
				navContainerClass: 'owl-buttons',
			});
			$('.owl-slider-v4-products').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
					300:{
            items: 1
          },
          500:{
            items: 2
          },
          768:{
            items: 3
          },
          1200:{
            items: 4
          }
        },
        nav: false,
        dots: true,
				dotsClass: 'owl-pagination',
				dotClass: 'owl-page',
			});
		}
	};
}();
