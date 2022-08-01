// Select The 7 Colors 
let colors=["blue","green","black","orange","yellow","purple","brown"];

//change the background of canvas when button is clicked
let button = document.getElementById('button');
button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //grab the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})