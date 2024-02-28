$(document).ready(function() {	
	$(".imgselect").mouseenter(function() { 
		$(this).css("filter", "grayscale(0%)");
		$(this).parent().parent().parent().filter(".card").addClass("col-main cardFocus");
	});
	
	$(".imgselect").mouseleave(function() { 
		$(this).css("filter", "grayscale(100%)");
		$(this).parent().parent().parent().filter(".card").removeClass("col-main cardFocus");
	});

	$('#mySel').change(function(){
		sel = $(this).val();
		if (sel == 'photos'){
			window.location.href = 'birdPageTemplate.html';
		} else if (sel == 'books'){
			window.location.href = 'birdPageTemplate.html';
		}else if (sel == 'recipes'){
			window.location.href = 'budgie.html';
		}
	});
})