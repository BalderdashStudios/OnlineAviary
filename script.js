$(document).ready(function() {	
	$(".imgselect").mouseenter(function() { 
		$(this).css("filter", "grayscale(0%)");
		$(this).parent().parent().parent().addClass("col-main");
	});
	
	$(".imgselect").mouseleave(function() { 
		$(this).css("filter", "grayscale(100%)");
		$(this).parent().parent().parent().removeClass("col-main");
	});
	
});
