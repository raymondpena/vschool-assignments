var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.splice(3, 1)
console.log(vegetables)

// 2. Remove the first item from the fruit array.
fruit.splice(0, 1)
console.log(fruit)

// 3. Find the index of "orange".
var orange = fruit.indexOf("orange")
console.log(orange)

// 4. Add that number to the end of the fruit array.
fruit.push(1)
console.log(fruit)

// 5. Use the length property to find the length of the vegetable array.
var vLength = vegetables.length
console.log(vLength)

// 6. Add the number to the end of the vegetable array.
vegetables.push(3)
console.log(vegetables)

// 7. Put the two array together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)

// 8. Remove 2 elements from the new array starting at index 4 with one method.
food.splice(4, 2)
console.log(food)

// 9. Reverse you array.
food.reverse()
console.log(food)

// 10. Turn the array into a string and return it.
var x = food.join("")
console.log(x)