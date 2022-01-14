function handleMobileNav() {
	$('.js-trigger').on('click', function(event) {
		$(this).toggleClass('nav-trigger--active');
		$('.header').toggleClass('is--active');
		$('body').toggleClass('is--fixed');

	  	event.preventDefault();
	});
}

handleMobileNav();
