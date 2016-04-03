var Owl2Carouselv2 = function () {
  return {
    // Owl Carousel v2
    initOwl2Carouselv2: function () {
      jQuery('.owl2-carousel-v2').owlCarousel({
        items: 2,
        margin: 10,
        loop: true,
        nav: true,
        navText: [,],
        responsive: {
          300:{
            items: 1
          },
          450:{
            items: 2
          },
        },
      })
    }
  };
}();