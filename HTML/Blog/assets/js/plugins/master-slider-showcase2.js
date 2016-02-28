var MasterSliderShowcase2 = function () {

    return {

        //Master Slider
        initMasterSliderShowcase2: function () {
		    var slider = new MasterSlider();
		 
		    slider.control('arrows');  
		    slider.control('bullets' , {autohide:false, align:'bottom', margin:0});   
		 
		    slider.setup('masterslider' , {
		        width:900,
		        height:450,
		        layout:'partialview',
		        space:5,
		        speed: 70,
		        view:'basic',
		        loop:true,
		        filters: {
		            grayscale:1,
		            contrast:2.5
		        }
		    });
        }
        
    };
    
}();