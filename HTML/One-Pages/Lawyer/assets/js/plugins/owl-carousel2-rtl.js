var OwlCarousel = function () {
	return {
		initOwlCarousel: function () {
			$('.owl-lawyer').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
          0:{
            items: 1
          }
        },
        navText: ['<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>'],
        nav: true,
        dots: false,
        navContainerClass: 'owl-buttons',
        rtl: true,
			});
		}
	};
}();
