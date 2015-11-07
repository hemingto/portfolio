$(document).ready( function() {

$("#left_brain_text").hide();

$("#left_brain").click( function() {
	$("#left_brain_text").fadeIn();
	$("#right_brain_text").hide();
	$("#")
});

$("#right_brain").click( function() {
	$("#right_brain_text").fadeIn();
	$("#left_brain_text").hide();

});


$("#download_button").hover(function() {
	$("#download_text").toggleClass("font-weight");
});

var work_img_height = $(".work_img").css("height");

console.log(work_img_height);

$(".blue_overlay").css("height", work_img_height);

});

