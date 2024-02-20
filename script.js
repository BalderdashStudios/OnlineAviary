$(document).ready(function() {	
	$(".imgselect").mouseenter(function() { 
		$(this).css("filter", "grayscale(0%)");
	});
	
	$(".imgselect").mouseleave(function() { 
		$(this).css("filter", "grayscale(100%)");
	});
	
});
