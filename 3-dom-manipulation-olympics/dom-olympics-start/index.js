/* "Your first task is to use pure JavaScript to insert a header to the top of this page. It should look like this:
The HTML for the header's container exists but the header and the name don't exist yet.
Feel free to change `.style` or use `.name` or `.header` classes from the CSS file."
*/
const header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "25px"

const div = document.createElement
const ame = document.createElement("span").textContent = "[Raymundo Pena]"
console.log(ame)
header.append(ame)