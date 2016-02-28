var StyleSwitcher = function() {

  return {

    //Style Switcher
    initStyleSwitcher: function() {
      var panel = jQuery('.style-switcher');
      var color = jQuery('.theme-active').attr("data-style");

      jQuery('.style-switcher-btn').click(function() {
        jQuery('.style-switcher').show();
      });

      jQuery('.theme-close').click(function() {
        jQuery('.style-switcher').hide();
      });

      jQuery('li', panel).click(function() {
        color = jQuery(this).attr("data-style");
        var data_header = jQuery(this).attr("data-header");
        setColor(color, data_header);
        jQuery('.list-unstyled li', panel).removeClass("theme-active");
        jQuery(this).addClass("theme-active");
      });

      var setColor = function(color, data_header) {
        jQuery('#style_color').attr("href", "../assets/css/theme-colors/" + color + ".css");
        if (!jQuery("body").hasClass("dark")) {
          jQuery('.navbar-brand img').attr("src", "../assets/img/themes/logo-news-dark-" + color + ".png");
          jQuery('.footer-logo').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
        } else {
          jQuery('.navbar-brand img').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
          jQuery('.footer-logo').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
        }
      }


      //Boxed Layout
      jQuery('.skins-btn').click(function() {
        jQuery(this).addClass("active-switcher-btn");
        jQuery(".handle-skins-btn").removeClass("active-switcher-btn");
        jQuery("body").addClass("dark");
        jQuery('.navbar-brand img').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
        jQuery('.footer-logo').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
      });
      jQuery('.handle-skins-btn').click(function() {
        jQuery(this).addClass("active-switcher-btn");
        jQuery(".skins-btn").removeClass("active-switcher-btn");
        jQuery("body").removeClass("dark");
        jQuery('.navbar-brand img').attr("src", "../assets/img/themes/logo-news-dark-" + color + ".png");
        jQuery('.footer-logo').attr("src", "../assets/img/themes/logo-news-light-" + color + ".png");
      });


      //Boxed Layout
      jQuery('.boxed-layout-btn').click(function() {
        jQuery(this).addClass("active-switcher-btn");
        jQuery(".wide-layout-btn").removeClass("active-switcher-btn");
        jQuery("body").addClass("boxed-layout container");
      });
      jQuery('.wide-layout-btn').click(function() {
        jQuery(this).addClass("active-switcher-btn");
        jQuery(".boxed-layout-btn").removeClass("active-switcher-btn");
        jQuery("body").removeClass("boxed-layout container");
      });

    }

  };

}();
