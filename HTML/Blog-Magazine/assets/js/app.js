/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function() {
	// We extend jQuery by method hasAttr
	$.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

  // Fixed Header
  function handleHeader() {
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 100) {
        jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
      } else {
        jQuery('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
      }
    });
  }

  // Search Box
  function handleSearch() {
    $('.blog-topbar .search-btn').on('click', function() {
      if (jQuery('.topbar-search-block').hasClass('topbar-search-visible')) {
        jQuery('.topbar-search-block').slideUp();
        jQuery('.topbar-search-block').removeClass('topbar-search-visible');
      } else {
        jQuery('.topbar-search-block').slideDown();
        jQuery('.topbar-search-block').addClass('topbar-search-visible');
      }
    });
    $('.blog-topbar .search-close').on('click', function() {
      jQuery('.topbar-search-block').slideUp();
      jQuery('.topbar-search-block').removeClass('topbar-search-visible');
    });
    jQuery(window).scroll(function() {
      jQuery('.topbar-search-block').slideUp();
      jQuery('.topbar-search-block').removeClass('topbar-search-visible');
    });
  }

  // TopBar
  function handleTopBar() {
    $('.topbar-toggler').on('click', function() {
      if (jQuery('.topbar-toggler').hasClass('topbar-list-visible')) {
        jQuery('.topbar-menu').slideUp();
        jQuery(this).removeClass('topbar-list-visible');
      } else {
        jQuery('.topbar-menu').slideDown();
        jQuery(this).addClass('topbar-list-visible');
      }
    });
  }

  // TopBar SubMenu
  function handleTopBarSubMenu() {
    $('.topbar-list > li').on('click', function(e) {
      if (jQuery(this).children('ul').hasClass('topbar-dropdown')) {
        if (jQuery(this).children('ul').hasClass('topbar-dropdown-visible')) {
          jQuery(this).children('.topbar-dropdown').slideUp();
          jQuery(this).children('.topbar-dropdown').removeClass('topbar-dropdown-visible');
        } else {
          jQuery(this).children('.topbar-dropdown').slideDown();
          jQuery(this).children('.topbar-dropdown').addClass('topbar-dropdown-visible');
        }
      }
      //e.preventDefault();
    });
  }

  // More Articles
  function handleMoreArticles() {
    var is_box_visible = true;
    var distance_from_top = $('.outside-more-articles').attr('data-scrollTop');

	  $(window).scroll(function() {
	    if (($(window).scrollTop() > distance_from_top)&&(is_box_visible === true)) {
	      $('.outside-more-articles').addClass('outside-more-articles--show');
	    } else {
	      $('.outside-more-articles').removeClass('outside-more-articles--show');
	    }
    });
    $('.outside-more-articles__close').on('click', function(e) {
      $('.outside-more-articles').removeClass('outside-more-articles--show');
      is_box_visible = false;
    });
  }

  // Please Wait
  function handlePleaseWait() {
  	var is_box_visible = true;
		$(document).mouseleave(function(e){
	    if ((e.clientY < 0)&&(is_box_visible === true)) {
      	$('.g-popup-wrapper').show();
      	if ($('.g-popup-wrapper').is(':visible')) $('body').addClass('g-blur');
	    }
		});
    $('.g-popup__close').on('click', function(e) {
      $('.g-popup-wrapper').hide();
      $('body').removeClass('g-blur');
      is_box_visible = false;
    });
  }

  // Hover Selector
  function handleHoverSelector() {
    $('.hoverSelector').on('hover', function(e) {
      $('.hoverSelectorBlock', this).toggleClass('show');
      e.stopPropagation();
    });
  }

  // Bootstrap Tooltips and Popovers
  function handleBootstrap() {
    /* Bootstrap Carousel */
    jQuery('.carousel').carousel({
      interval: 15000,
      pause: 'hover'
    });

    /* Tooltips */
    jQuery('.tooltips').tooltip();
    jQuery('.tooltips-show').tooltip('show');
    jQuery('.tooltips-hide').tooltip('hide');
    jQuery('.tooltips-toggle').tooltip('toggle');
    jQuery('.tooltips-destroy').tooltip('destroy');

    /* Popovers */
    jQuery('.popovers').popover();
    jQuery('.popovers-show').popover('show');
    jQuery('.popovers-hide').popover('hide');
    jQuery('.popovers-toggle').popover('toggle');
    jQuery('.popovers-destroy').popover('destroy');
  }

  return {
    init: function() {
      handleSearch();
      handleTopBar();
      handleHeader();
      handleBootstrap();
      handleHoverSelector();
      handleTopBarSubMenu();
      handleMoreArticles();
      handlePleaseWait();
    },

    // Scroll Bar
    initScrollBar: function() {
      jQuery('.mCustomScrollbar').mCustomScrollbar({
        theme: 'minimal',
        scrollInertia: 300,
        scrollEasing: 'linear'
      });
    },

    // Counters
    initCounter: function() {
      jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    },

  };

}();
