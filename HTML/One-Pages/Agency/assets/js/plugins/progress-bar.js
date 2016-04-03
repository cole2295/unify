// Created by: Farukham: (https://github.com/farukham/Bootstrap-Animated-Progress-Bars)
var ProgressBar = function() {
  return {
    // Progress Bar Horizontal
    initProgressBarHorizontal: function() {
      $(function() {
        jQuery('.progress').each(function() {
          jQuery(this).appear(function() {
            jQuery(this).animate({
              opacity: 1,
              left: "0px"
            }, 800);
            var b = jQuery(this).find(".progress-bar").attr("data-width");
            jQuery(this).find(".progress-bar").animate({
              width: b + "%"
            }, 100, "linear");
            jQuery(this).find(".progress-bar").html('<span>' + b + '%</span>');
          });
        });
      });
    },
  };

}();
