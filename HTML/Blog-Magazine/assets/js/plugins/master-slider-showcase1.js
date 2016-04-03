var MasterSliderShowcase1 = function () {

    return {

        //Master Slider
        initMasterSliderShowcase1: function () {
			var slider = new MasterSlider();
		
			slider.control('arrows');	
			slider.control('slideinfo',{insertTo:"#partial-view-1" , autohide:false, align:'bottom', size:0});
			slider.control('circletimer' , {color:"#fff" , stroke:9});
			
			slider.setup('masterslider' , {
				width:850,
				height:400,
				space:10,
		        speed: 40,				
				loop:true,
				view:'fadeWave',
				layout:'partialview'
			});
        }
        
    };
    
}();