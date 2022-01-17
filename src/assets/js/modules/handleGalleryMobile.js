import { $window, $document } from '../utils/globals';

$('.js-gallery-item').on('click', function(event) {
	const $this = $(this);
	const isActive = $this.hasClass('is--active');

	if ( $window.width() <= 1024 && !isActive) {
		$this.closest('.gallery')
			.find('.gallery-item').removeClass('is--active');
		$this.addClass('is--active');
	  	event.preventDefault();
	}
});
