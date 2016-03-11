$(document).ready( function() {

$("#left_brain_text").hide();

$("#left_brain").click( function() {
	$("#left_brain_text").fadeIn("slow");
	$("#right_brain_text").hide();
});

$("#right_brain").click( function() {
	$("#right_brain_text").fadeIn("slow");
	$("#left_brain_text").hide();

});



function smooth_scroll() {

	about = $('#about').offset().top;
	work = $('#work').offset().top;
	resume = $('#resume').offset().top;

	$('#nav_about').unbind().click(function(){
		$('html, body').animate({scrollTop:about}, 'slow');
		return false;
	});

	$('#nav_work').unbind().click(function(){
		$('html, body').animate({scrollTop:work}, 'slow');
		return false;
	});

	$('#nav_resume').unbind().click(function(){
		$('html, body').animate({scrollTop:resume}, 'slow');
		return false;
	});


	$('#to_top').unbind().click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

}

smooth_scroll();

$(window).resize(function() {

	smooth_scroll();	

});

});

