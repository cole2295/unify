var MasonryBox = function () {

    return {

     	// Masonry Box
       	initMasonryBox: function () {
	   		var container = document.querySelector('.masonry-box');
   			var msnry;
   			// initialize Masonry after all images have loaded
   			imagesLoaded( container, function() {
     			msnry = new Masonry( container );
   			});
	   
		   	var msnry = new Masonry( container, {
		      	itemSelector: '.masonry-box-in',
		      	masonry: {
		           	gutterWidth: 20,
		           	columnWidth: 100
		       	}
		   	});
  		}
	};
}();