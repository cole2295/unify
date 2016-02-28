var OwlCarousel = function () {

    return {

        //Owl Carousel
        initOwlCarousel: function () {
	        //Blog Carousel
			var owl = jQuery(".blog-carousel").owlCarousel({
                items : 1,
                itemsDesktop : [1000,1],
                itemsDesktopSmall : [900,1],
                itemsTablet: [600,1],
                itemsMobile : [479,1],
                slideSpeed: 700
            });
            jQuery(".next-v3").click(function(){
                owl.trigger('owl.next');
            })
            jQuery(".prev-v3").click(function(){
                owl.trigger('owl.prev');
            })
        },

        //Owl Carousel v2
        initOwlCarousel2: function () {
            //Blog Carousel
            var owl = jQuery(".blog-carousel-v2").owlCarousel({
                items : 1,
                itemsDesktop : [1000,1],
                itemsDesktopSmall : [900,1],
                itemsTablet: [600,1],
                itemsMobile : [479,1],
                slideSpeed: 700
            });
            jQuery(".next-v4").click(function(){
                owl.trigger('owl.next');
            })
            jQuery(".prev-v4").click(function(){
                owl.trigger('owl.prev');
            })
        }
        
    };
    
}();