
$(document).ready(function() {
	$('.inactive').on('mouseover', function() {
		$(this).addClass("active");
	});
	$('.inactive').on('mouseleave', function() {
		$(this).removeClass("active");
	});

});