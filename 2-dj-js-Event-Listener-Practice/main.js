const square = document.getElementById("square")

// "Blue when the mouse hovers over the square"
square.addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue"
})

// "Red when the mouse button is held down over the square"
square.addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
})

// "Yellow when the mouse button is let go over the square"
square.addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
})

// "Green when the mouse is double clicked in the square"
square.addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
})

// "Orange when the mouse scroll is used somewhere in the window (not just over the square)"
document.addEventListener("wheel", () => {
    square.style.backgroundColor = "orange"
})

/* "You should also be able to press the first letter of the colors (typing "r" 
on the keyboard for "red", for example) and have the box change to that color. 
Check out the key and keyCode property of e.target"
*/
// "b for blue"
document.addEventListener("keypress", function(e){
    if(e.key == "b"){
        square.style.backgroundColor = "blue"
    }
})
// "r for red"
document.addEventListener("keypress", function(e){
    if(e.key == "r"){
        square.style.backgroundColor = "red"
    }
})
// "y for yellow"
document.addEventListener("keypress", function(e){
    if(e.key == "y"){
        square.style.backgroundColor = "yellow"
    }
})
// "g for green"
document.addEventListener("keypress", function(e){
    if(e.key == "g"){
        square.style.backgroundColor = "green"
    }
})
// "o for orange"
document.addEventListener("keypress", function(e){
    if(e.key == "o"){
        square.style.backgroundColor = "orange"
    }
})