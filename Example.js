/*  
1. Create an array called expenses that contains at least 5 different expense amounts.

2. Calculate the total expenses by summing all the elements of the array.

3. Find the highest and lowest individual expenses within the array. 
*/


var expenses = [1, 5, 6, 7, 8]
let total = expenses.reduce((sum, mark) => sum + mark, 0)
console.log(total)


let minArr = expenses.sort((a, b) => a - b)
console.log(minArr[0])

let maxArr = expenses.sort((a, b) => b - a)
console.log(maxArr[0])




/*  
1. Create an array named studentNames with the names of your students.

2. Add a new student name to the beginning of the array.

3. Remove the last student name from the array.

4. Alphabetize the student names within the array. 
*/



var studentNames = ['B', 'X', 'Y', 'A', 'T']
console.log(studentNames)

studentNames.unshift('G')
console.log(studentNames)

studentNames.pop()
console.log(studentNames)

let alphabetize = studentNames.sort()
console.log(alphabetize)


/* 
1. You have an array called productPrices with various product prices.

2. Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

3. Use the filter method to create a new array called affordableProducts containing only products priced below $50

4. Calculate the total cost of all items in the affordableProducts array using the reduce method. 
*/

var productPrices = [100, 200, 300, 400, 500]

let discountedPrices = productPrices.map(score => score * (10 / 100))
console.log(discountedPrices)

let affordableProducts = productPrices.filter(score => score < 400)
console.log(affordableProducts)

let totalCost = affordableProducts.reduce((sum, val) => sum + val, 0)
console.log(totalCost)



