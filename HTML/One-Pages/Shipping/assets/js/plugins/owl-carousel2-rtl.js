var OwlCarousel = function () {
	return {
		initOwlCarousel: function () {
			$('.owl-ts-v1').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
          0:{
            items: 1
          }
        },
				nav: true,
				dots: false,
				navText: ["",""],
				navContainerClass: 'owl-buttons',
				rtl: true
			});

			$('.owl-clients-v1').owlCarousel({
				items : 7,
				autoPlay : 5000,
        loop: true,
        margin: 0,
        responsive: {
					300:{
            items: 2
          },
          600:{
            items: 3
          },
          900:{
            items: 4
          },
          1000:{
            items: 5
          },
          1100:{
            items: 7
          },
        },
        nav: false,
        dots: false,
        rtl: true
			});
		}
	};
}();
