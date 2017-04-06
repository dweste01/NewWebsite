
$(document).ready(function() {
	$('#tufts').on('mouseover', function() {
		$(this).css({'font-size': '16px',
					 'color': '#66667a',
					 'box-shadow': '-3px 3px 5px',
					 'font-family': 'Dancing Script'});
	});
	$('#tufts').on('mouseleave', function() {
		$(this).css({'font-size': '14px',
					 'color': '#66667a',
					 'box-shadow': '0px 0px',
					 'font-family': 'Shadows Into Light'});
	});
	$('#life').on('mouseover', function() {
		$(this).css({'font-size': '16px',
					 'color': '#66667a',
					 'box-shadow': '-3px 3px 5px',
					 'font-family': 'Dancing Script'});
	});
	$('#life').on('mouseleave', function() {
		$(this).css({'font-size': '14px',
					 'color': '#66667a',
					 'box-shadow': '0px 0px',
					 'font-family': 'Shadows Into Light'});
	});
	$('#work').on('mouseover', function() {
		$(this).css({'font-size': '16px',
					 'color': '#66667a',
					 'box-shadow': '-3px 3px 5px',
					 'font-family': 'Dancing Script'});
	});
	$('#work').on('mouseleave', function() {
		$(this).css({'font-size': '14px',
					 'color': '#66667a',
					 'box-shadow': '0px 0px',
					 'font-family': 'Shadows Into Light'});
	});
});