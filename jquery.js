
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


var about = $('#about').offset().top;
var work = $('#work').offset().top;
var resume = $('#resume').offset().top;

$('#nav_about').click(function(){
	$('html, body').animate({scrollTop:about}, 'slow');
	return false;
});

$('#nav_work').click(function(){
	$('html, body').animate({scrollTop:work}, 'slow');
	return false;
});

<<<<<<< HEAD
=======
$('#nav_resume').click(function(){
	$('html, body').animate({scrollTop:resume}, 'slow');
	return false;
});


$('#to_top').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});







>>>>>>> 3683d303213a26cc64e5a61d5b3d2019c1e15728
});
