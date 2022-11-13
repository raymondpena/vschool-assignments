const form = document.getElementById("add-todo")
const list = document.getElementById("list")

//Delete item
const deleteButton = document.getElementsByClassName("delete")
function addeventlisteners(){
    for(i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener("click", (e) => {
            e.target.parentElement.remove()
        })
    }
}
addeventlisteners()
//New item
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const listItem = document.createElement("li")
    const item = document.createElement("div")
    const itemText = document.createElement("p").textContent = this.title.value
    const editButton = document.createElement("button")
    const xButton = document.createElement("button")
    xButton.setAttribute("class", "delete")
    xButton.textContent = "X"
    item.append(itemText)
    editButton.textContent = "edit"
    listItem.append(item, editButton, xButton)
    list.prepend(listItem)
    xButton.addEventListener("click", (e) =>{
        e.target.parentElement.remove()
    })
    this.title.value = ""
})



//Nodelist testbox
var test = document.getElementsByClassName("delete")
const testButton = document.createElement("button")
testButton.style.width = "30px"
testButton.style.height = "30px"
testButton.style.border = "solid black"
document.body.append(testButton)

testButton.addEventListener("click", () => {
    console.log(document.getElementsByClassName("delete"))
})