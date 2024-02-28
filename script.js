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
		if (sel == 'Condor'){
			window.location.href = 'birdPageTemplate.html';
		} else if (sel == 'Magpie'){
			window.location.href = 'magpie.html';
		}else if (sel == 'Horned Owl'){
			window.location.href = 'hornedOwl.html';
		}else if (sel == 'Curassow'){
			window.location.href = 'curassow.html';
		}else if (sel == 'Harpy Eagle'){
			window.location.href = 'harpyEagle.html';
		}else if (sel == 'Bananaquit'){
			window.location.href = 'bananaquit.html';
		}
	});
})