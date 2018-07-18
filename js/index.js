// 4. Create an array of 5 numbers each with 2 decimal places.

var numList = [1.23, 3.21, 15.22, 34.54, 10.01]

// 5. Loop through the array and round all numbers to the nearest whole integer. Add each rounded number to a new array.

console.log(numList.map(el => Math.round(el)))

// 6. Create a function that produces 10 random numbers between 1 and 100. Add each number to an array of numbers.

function tenRandomNumberBetween1To100(){
  var nums = []
  for(i = 0; i < 10; i++) {
    nums.push(Math.floor(Math.random()*100)+1)
  }
  return nums
} 

console.log(tenRandomNumberBetween1To100())

// 7. Write out a function that creates a few variables which store the following information: one which stores the whole date, one for the current hour, one for the current minute, and one for the current second.

// 8. Inside the function, create a variable that will display the current time in the hh:mm:ss format. Don't forget to account for single-digit numbers!

// 9. Inside the function, create a few more variables to store the current month, day, and year.

// 10. Inside the function, create a variable that will display the current date in the dd/mm/yy format. Don't forget to account for single-digit numbers!

// 11. By now, you should have a function which displays the date and time in the hh:mm:ss dd/mm/yy format. Change your function to print this time and date onto your document.

// 12. Now write some code that will run this time/date function every second. To do this, your function will need to use setTimeout to invoke itself after a dela812