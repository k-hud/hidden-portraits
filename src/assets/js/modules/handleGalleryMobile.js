import { $window, $document } from '../utils/globals';

function handleGalleryMobile() {
	$('.js-gallery-item').one('click touchstart', function(event) {
		var $this = $(this);

		$this.attr('disabled', true);
		$this.closest('.gallery')
			.find('.gallery-item').removeClass('is--active');
		$this.addClass('is--active');

	  	event.preventDefault();
	});

	$document.on('click touchstart', function(event) {
		var $target = $(event.target);

		if (!$target.closest('.gallery-item').length) {
	   		$('.gallery-item').removeClass('is--active');
		}
	});
}

$window.on('load resize', function(event) {
	if ( $window.width() <= 1024 ) {
		handleGalleryMobile();
	}
});

