import { $window } from '../utils/globals';

function handleGalleryMobile() {
	$('.js-gallery-item').one('click', function(event) {
		$(this).attr('disabled', true);
		$(this).addClass('is--active');

	  	event.preventDefault();
	});
}

$window.on('load resize', function(event) {
	if ( $window.width() <= 1024 ) {
		handleGalleryMobile();
	}
});

