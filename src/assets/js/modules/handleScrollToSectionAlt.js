$('.js-scroll-alt').on('click', function(event) {
	event.preventDefault();

	var href = $(this).attr('href');

	$('html,body').animate({
		scrollTop: $(href).offset().top - $('.header').outerHeight() - 20
	});
});
