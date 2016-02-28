var MasterSliderShowcase3 = function () {

    return {

        //Master Slider
        initMasterSliderShowcase3: function () {
			var slider = new MasterSlider();
		     
		    slider.control('arrows');  
		    slider.control('circletimer' , {color:"#fff" , stroke:9});
		    slider.control('thumblist' , {autohide:false ,dir:'h', type:'tabs',width:285,height:135, align:'bottom', space:0 , margin:-12, hideUnder:992});
		 
		    slider.setup('masterslider' , {
		        width:1140,
		        height:500,
		        space:0,
		        speed: 50,
		        preload:'all',
		        view:'basic'
		    });
        }
        
    };
    
}();