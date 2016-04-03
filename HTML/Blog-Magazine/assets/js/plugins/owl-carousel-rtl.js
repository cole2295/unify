var OwlCarousel = function() {

  return {

    //Owl Carousel
    initOwlCarousel: function() {
      //Blog Carousel
      var owl = jQuery(".blog-carousel").owlCarousel({
        loop: true,
        rtl: true,
        responsive: {
          0: {
            items: 1
          },
        }
      });
      jQuery(".next-v3").click(function() {
        owl.trigger('next.owl.carousel');
      })
      jQuery(".prev-v3").click(function() {
        owl.trigger('prev.owl.carousel');
      })
    },

    //Owl Carousel v2
    initOwlCarousel2: function() {
      //Blog Carousel
      var owl = jQuery(".blog-carousel-v2").owlCarousel({
        loop: true,
        rtl: true,
        responsive: {
          0: {
            items: 1
          },
        }
      });
      jQuery(".next-v4").click(function() {
        owl.trigger('next.owl.carousel');
      })
      jQuery(".prev-v4").click(function() {
        owl.trigger('prev.owl.carousel');
      })
    }

  };

}();
