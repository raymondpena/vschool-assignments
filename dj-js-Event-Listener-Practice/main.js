const square = document.getElementById("square")

// "Blue when the mouse hovers over the square"
square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})

// "Red when the mouse button is held down over the square"
square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})

// "Yellow when the mouse button is let go over the square"
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})

// "Green when the mouse is double clicked in the square"
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})

const body = document.getElementById("body")
// "Orange when the mouse scroll is used somewhere in the window (not just over the square)"
body.addEventListener("wheel", function(){
    square.style.backgroundColor = "orange"
})

/* "You should also be able to press the first letter of the colors (typing "r" 
on the keyboard for "red", for example) and have the box change to that color. 
Check out the key and keyCode property of e.target"
*/
// this.addEventListener("keypress", function(r){
//     if(r.keyCode === 82){
//         function(){
//             square.style.backgroundColor = "red"
//         }
//     }
// })
// console.log(r)

// this.addEventListener(function checkenter(data){
//     if(data.keycode == 13){
//         console.log("enter")
//     }
// }
