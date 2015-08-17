//click toggle function	
(function($) {
	$.fn.clickToggle = function(func1, func2) {
		var funcs = [func1, func2];
		this.data('toggleclicked', 0);
		this.click(function() {
			var data = $(this).data();
			var tc = data.toggleclicked;
			$.proxy(funcs[tc], this)();
			data.toggleclicked = (tc + 1) % 2;
		});
		return this;
	};
}(jQuery));

//checks if jquery is ready
jQuery(document).ready(function($) {
	jQuery('.main_nav>li').click(function(event) {
				//hide all submenus
				jQuery('.submenu').fadeOut();
				//remove active class from any active list items
				jQuery('.main_nav>li').removeClass('active');
				//adds active class to clicked element (li)
				jQuery(this).addClass('active');
				//shows submenu of "this" list item
				jQuery(this).children('.submenu').fadeIn();
			}); 
//mobile menu toggle
jQuery('.menu_toggle').clickToggle(function() {
	jQuery('.main_nav').slideDown();
	jQuery(this).addClass('active');
}, function() {
	jQuery('.main_nav').slideUp();
	jQuery(this).removeClass('active');
});

//checks if window is resized and conditionally displays full size menu
jQuery( window ).resize(function() {
	if (!jQuery('.menu_toggle').is(':visible')) {
		jQuery('.main_nav').show();
	}
});
}); 

