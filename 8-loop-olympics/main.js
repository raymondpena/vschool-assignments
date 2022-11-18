// Preliminaries

// 1. Write a for loop that prints to the console the numbers 0 through 9.
for (var i = 0; i <= 9; i++) {
    //console.log(i)
}

// 2. Write a for loop that prints to the console 9 through 0.
for (var i = 9; i >= 0; i--) {
    //console.log(i)
}

// 3. Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    //console.log(fruit[i])
}

// Bronze Medal

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
const anArray = []
for (var i = 0; i <= 9; i++) {
    anArray.push(i)
}
// console.log(anArray)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        //console.log(i)
    }
}

// 3. Write a for loop that will push every other fruit to an array.
const fruitTwo = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruitArray = []
for (var i = 0; i < fruitTwo.length; i++) {
    if (i % 2 === 0) {
        fruitArray.push(fruit[i])
    }
}
// console.log(fruitArray)

// silver medal

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// 1. Write a loop that will print out all the names of the people of the people array.

for (var i = 0; i < peopleArray.length; i++){
    // console.log(peopleArray[i].name)
}

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let namesArray = []
let occupArray = []
for (var i = 0; i < peopleArray.length; i++){
    namesArray.push(peopleArray[i].name)
    occupArray.push(peopleArray[i].occupation)
}
// console.log(namesArray)
// console.log(occupArray)

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
let otherNameArray = []
let otherOccupArray = []
for (var i = 0; i < peopleArray.length; i++){
    if (i % 2 === 0){
        otherNameArray.push(peopleArray[i].name)
    }
    if (i % 2 === 1){
        otherOccupArray.push(peopleArray[i].occupation)
    }
}
// console.log(otherNameArray)
// console.log(otherOccupArray)

// gold medal

var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (var i = 0; i < arrayOfArrays.length; i++){
    for (var j = 0; j < arrayOfArrays[i].length; j++){
        console.log(arrayOfArrays[i][j])
    }
}