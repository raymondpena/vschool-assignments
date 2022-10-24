// Color Controls

var purpleButton = document.getElementById("purple")
var greenButton = document.getElementById("green")
var yellowButton = document.getElementById("yellow")
var pinkButton = document.getElementById("pink")

purpleButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "purple"
})
greenButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "green"
})
yellowButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow"
})
pinkButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink"
})


// Count controls

var count = 0
var subtractButton = document.getElementById("subtract")
var addButton = document.getElementById("add")


subtractButton.addEventListener("click", function(){
    count--
    document.getElementById("counter").innerText = count;
})
addButton.addEventListener("click", function(){
    count++
    document.getElementById("counter").innerText = count;
})