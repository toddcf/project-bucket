function videoResize(){
  if (jQuery(window).width() > 468) {
	  jQuery(document).ready(function($){
		  $(window).resize(function(){
			var height = $(this).height();
		  $('.fullpage').height(height);
		  });
		  $(window).resize(); 
	  });
	}
}
  
fZONE.ready(function(){
	$('#video-container').vide({
		'mp4': 'https://s3.amazonaws.com/fzautomotive/videos/other/030218.mp4'
		}, {
		posterType: "jpg"
		}
	);
	videoResize();
});