// Example 1:

function greet(name {
  return "Hello, " + name;
}

// console.log(greet("Erica"));

// Expected result:
// Should print "Hello, Erica"



// Example 2:

function calculateAvg(prices) {
  let total = 0;
  for (const price of prices) {
    total += price; // total = total + price; // 10, 30, 60
  }
  return total / prices.length - 1;
}

console.log(calculateAvg([10, 20, 30]));

// Expected result: 20



// Example 3:

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello"));

// Expected result:
// Actual result:


// Example 4:

function findIndex(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([2, 4, 6, 8], 6));

// Expected result: 2


// Example 5:

function doubleValues(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleValues(5));

// Expected result:
