$('.js-scroll').on('click', function(event) {
	event.preventDefault();

	var href = $(this).attr('href');

	$('html,body').animate({
		scrollTop: $(href).offset().top
	});

	$.fx.prototype.curOriginal = $.fx.prototype.cur;
      $.fx.prototype.cur = function( force ) {
            if ($(this.elem).is('body') && this.prop == 'scrollTop') return $(window).scrollTop();
            return this.curOriginal(force);
	}
});
