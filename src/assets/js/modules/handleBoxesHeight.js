import { $window } from '../utils/globals';

function equalizeHeightFeatures() {
	$('.boxes-wrapper').each(function(){
		const $this = $(this);
	    let highestBox = 0;

	    $this.find('.box .box__inner').each(function(){
	        if($(this).outerHeight() > highestBox){
	            highestBox = $(this).outerHeight();
	        }
	    });

	    $this.find('.box').height(highestBox);
	});
}

equalizeHeightFeatures();

$window.on('resize', function(event) {
	setTimeout(function() {
   		equalizeHeightFeatures();
	}, 100);
});
