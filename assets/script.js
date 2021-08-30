// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Sam Patterson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
// let total = gb + cc + sugar

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
let totalQty = document.getElementById('qty-total')
let gbQty = document.getElementById('qty-gb')
let ccQty = document.getElementById('qty-cc')
let sugarQty = document.getElementById('qty-sugar')

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    gb++
    gbQty.textContent = gb
    let total = gb + cc + sugar
    totalQty.textContent = total


    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})


document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    cc++
    ccQty.textContent = cc
    let total = gb + cc + sugar
    totalQty.textContent = total

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    sugar++
    let total = gb + cc + sugar
    sugarQty.textContent = sugar
    totalQty.textContent = total

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})


// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    if (gb > 0) {
    gb--
    gbQty.textContent = gb
    let total = gb + cc + sugar
    totalQty.textContent = total
    }


    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})


document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    if (cc > 0) {
    cc--
    ccQty.textContent = cc
    let total = gb + cc + sugar
    totalQty.textContent = total
    }
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    if (sugar > 0) {
    sugar--
    let total = gb + cc + sugar
    sugarQty.textContent = sugar
    totalQty.textContent = total
    }
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})