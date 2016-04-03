var MasterSliderShowcase4 = function () {

    return {

        //Master Slider
        initMasterSliderShowcase4: function () {
		    var slider = new MasterSlider();
		     
		    slider.control('arrows');  
		    slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		    slider.control('thumblist' , {autohide:false ,dir:'v',type:'tabs', align:'right', margin:-12, space:0, width:280, height:124, hideUnder:992});
		 
		    slider.setup('masterslider' , {
		        width:890,
		        height:500,
		        space:0,
		        speed: 50,
		        view:'basic'
		    });
        }
        
    };
    
}();