/*!
 * Center - jQuery plugin
 * http://pixietheme.com/
 *
 * Copyright 2015, Arifur Rahman
 * Free for any personal or commercial use.
 *
 */
(function($) {
	var defaults = {
		vartical: true,
		horizontal: true,
		animate: false
	};

	$.fn.center = function(config) {
		if(config !== undefined) {
			config = $.extend({}, defaults, config);
		} else {
			config = defaults;
		}

		var el = $(this),
			win = $(window);
		el.load(function() {
			changeCss();

			win.on('resize', function() {
				changeCss();
			});

			if(config.animate) el.addClass('animate');					
			

			function changeCss() {
				var imageHeight = el.height(),
					imageWidth = el.width(),
					windowHeight = win.height(),
					windowWidth = win.width();
				if(config.vartical && config.horizontal) {
					el.css({
						position: 'absolute',
						top: windowHeight / 2 - imageHeight / 2,
						left: windowWidth / 2 - imageWidth / 2
					});
				} else if(config.vartical) {
					el.css({
						position: 'absolute',
						top: windowHeight / 2 - imageHeight / 2						
					});
				} else {
					el.css({
						position: 'absolute',						
						left: windowWidth / 2 - imageWidth / 2
					});
				}		
			}
		});
		return this;
	};
})(jQuery);
