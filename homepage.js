
$(document).ready(function() {
	$('.butt').on('mouseover', function() {
		// $(this).width(100);
		$(this).css({'width': '130 px',
					 'height': '100px',
					 // 'font-style': 'italic',
					 'font-size': '20px',
					 'color': '#66667a',
					 'box-shadow': '-10px 10px 5px',
					 'font-family': 'Dancing Script'});
	});
	$('.butt').on('mouseleave', function() {
		$(this).css({'width': '120px',
					 'height': '90px',
					 // 'font-style': 'normal',
					 'font-size': '18px',
					 'color': '#66667a',
					 'box-shadow': '0px 0px',
					 'font-family': 'Shadows Into Light'});
	});
});