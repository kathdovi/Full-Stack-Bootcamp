// When the factButton is clicked...
$("#factButton").on("click", function() {
	// Generate a number between 0 and 4 (len of fact array)
	var number = Math.floor((Math.random() * booFacts.length));
	// Then display that fact
	$("#factText").text(booFacts[number])
})

//Oh y'all suck. You didn't seperate the elements of the array with double quotes, etc "element" "element" 
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})