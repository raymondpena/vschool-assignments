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
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const listItem = document.createElement("li")
    const item = document.createElement("div")
    const itemText = document.createElement("p").textContent = this.title.value
    const editButton = document.createElement("button")
    const xButton = document.createElement("button")
    item.append(itemText)
    editButton.textContent = "edit"
    listItem.append(item, editButton, xButton)
    list.prepend(listItem)
    xButton.setAttribute("class", "delete")
    xButton.textContent = "X"
    xButton.addEventListener("click", (e) =>{
        e.target.parentElement.remove()
    })
    this.title.value = ""
})

// Extra Credit

const editButton = document.getElementsByClassName("edit")
const inputBox = document.createElement("input")
function addinputbox(){
    for(i = 0; i < editButton.length; i++){
        editButton[i].addEventListener("click", (e) => {
            e.preventDefault()
            e.target.parentElement.append(inputBox)
            inputBox.classList.add("inputbox")
            e.target.textContent = "save"
            function removeinputbox(){
                for(i = 0; i < editButton.length; i++){
                    editButton[i].addEventListener("click", (e) => {
                        e.preventDefault()
                        e.target.parentElement.getElementsByClassName("inputbox").remove()
                        e.target.textContent = "edit"
                    })
                }
            }
            removeinputbox()    
        })
    }
}
addinputbox()

function removeinputbox(){
    for(i = 0; i < editButton.length; i++){
        editButton[i].addEventListener("click", (e) => {
            e.preventDefault()
            e.target.parentElement.getElementsByClassName("inputbox").remove()
            e.target.textContent = "edit"
        })
    }
}

//testbox
var test = document.getElementsByClassName("delete")
const testButton = document.createElement("button")
testButton.style.width = "30px"
testButton.style.height = "30px"
testButton.style.border = "solid black"
document.body.append(testButton)

testButton.addEventListener("click", () => {
    console.log(document.querySelectorAll("li"))
})