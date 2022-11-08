/* "Your first task is to use pure JavaScript to insert a header to the top of this page. It should look like this:
The HTML for the header's container exists but the header and the name don't exist yet.
Feel free to change `.style` or use `.name` or `.header` classes from the CSS file."
*/
// header
const header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
const myName = document.createElement("span")
myName.textContent = "[Raymundo Pena]"
myName.style.textAlign = "center"
myName.style.color = "orange"
const wrote = document.createElement("span").textContent = "wrote the JavaScript"
const name = document.getElementById("name").append(myName, wrote)

// chat box
const msgs = document.querySelectorAll(".messages > div")
for(i = 0; i < msgs.length; i++){
    msgs[i].textContent = "something fun and good."
}

// clear box
const clear = document.getElementById("clear-button")
let box = document.getElementById("input")
clear.addEventListener("click", function(){
    box.value = ""
})