var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
let pArray = []
for (var i = 1; i <= people.length; i++) {
    
    for (var k = 0; k < alphabet.length; k++) {
        pArray = people.slice(0, i)
        pArray.push(alphabet.split(""))
    }

}

console.log(pArray)