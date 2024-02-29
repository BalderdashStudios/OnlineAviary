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
		}else if (sel == 'European Green Woodpecker'){
			window.location.href = 'europeanGreenWoodpecker.html';
		}else if (sel == 'Northern Bald Ibis'){
			window.location.href = 'northernBaldIbis.html';
		}else if (sel == 'Dalmation Pelican'){
			window.location.href = 'dalmationPelican.html';
		}else if (sel == 'Budgie'){
			window.location.href = 'budgie.html';
		}else if (sel == 'Cassowary'){
			window.location.href = 'cassowary.html';
		}else if (sel == 'Grey Falcon'){
			window.location.href = 'greyFalcon.html';
		}else if (sel == 'Palawan Peacock Pheasant'){
			window.location.href = 'palawanPeacockPheasant.html';
		}else if (sel == 'Falcated Duck'){
			window.location.href = 'falcatedDuck.html';
		}else if (sel == 'White Throated Kingfisher'){
			window.location.href = 'whiteThroatedKingfisher.html';
		}else if (sel == 'Lilac-breasted Roller'){
			window.location.href = 'LilacBrestedRoller.html';
		}else if (sel == 'Banded Green Sunbird'){
			window.location.href = 'bandedGreenSunbird.html';
		}else if (sel == 'African Grey Parrot'){
			window.location.href = 'greyParrot.html';
		}
	});
	//Select for regions
	$('#nestList').change(function(){
		sel = $(this).val();
		if (sel == 'Condor'){
			window.location.href = '../birdPageTemplate.html';
		} else if (sel == 'Magpie'){
			window.location.href = '../magpie.html';
		}else if (sel == 'Horned Owl'){
			window.location.href = '../hornedOwl.html';
		}else if (sel == 'Curassow'){
			window.location.href = '../curassow.html';
		}else if (sel == 'Harpy Eagle'){
			window.location.href = '../harpyEagle.html';
		}else if (sel == 'Bananaquit'){
			window.location.href = '../bananaquit.html';
		}else if (sel == 'European Green Woodpecker'){
			window.location.href = '../europeanGreenWoodpecker.html';
		}else if (sel == 'Northern Bald Ibis'){
			window.location.href = '../northernBaldIbis.html';
		}else if (sel == 'Dalmation Pelican'){
			window.location.href = '../dalmationPelican.html';
		}else if (sel == 'Budgie'){
			window.location.href = '../budgie.html';
		}else if (sel == 'Cassowary'){
			window.location.href = '../cassowary.html';
		}else if (sel == 'Grey Falcon'){
			window.location.href = '../greyFalcon.html';
		}else if (sel == 'Palawan Peacock Pheasant'){
			window.location.href = '../palawanPeacockPheasant.html';
		}else if (sel == 'Falcated Duck'){
			window.location.href = '../falcatedDuck.html';
		}else if (sel == 'White Throated Kingfisher'){
			window.location.href = '../whiteThroatedKingfisher.html';
		}else if (sel == 'Lilac-breasted Roller'){
			window.location.href = '../LilacBrestedRoller.html';
		}else if (sel == 'Banded Green Sunbird'){
			window.location.href = '../bandedGreenSunbird.html';
		}else if (sel == 'African Grey Parrot'){
			window.location.href = '../greyParrot.html';
		}
	});
})