$( document ).ready(function() {
	$('.js-nav li ul')
				.closest('li')
				.addClass('dropdown-trigger')
				.find('> a')
				.on('click', function (e) {
					e.preventDefault();
				});
});
