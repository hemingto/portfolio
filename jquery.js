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

});

