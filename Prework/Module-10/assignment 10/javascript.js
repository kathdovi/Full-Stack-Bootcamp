// Grow Buttom
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.width = "250px";
    document.getElementById("box").style.height = "250px";

});
    
// Blue Buttom
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

// Fade Buttom
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.2";

});

// Reset Buttom
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.opacity = "1";

});