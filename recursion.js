// Countdown
function countdown(n) {
  if (n === 0) {
    console.log("Blast off!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}


// Reverse a string
function reverseString(str) {
  if (str.length <= 1) return str;
  console.log('str:', str)
   reverseString(str.slice(1)) + str[0];
}


// Factorial - non-TCO
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// Factorial - Tail Call Optimization
function factorialTCO(n, acc = 1) {
  if (n === 1) return acc;
  return factorialTCO(n - 1, acc * n);
}


// Count Items in a Nested Object:
// You’re given a nested object of folders and files.
// Write a recursive function countFiles(folder) that counts all files in all nested folders.

const folder = {
  name: "root",
  files: ["a.txt", "b.txt"],
  folders: [
    {
      name: "photos",
      files: ["img1.jpg", "img2.jpg"],
      folders: []
    },
    {
      name: "docs",
      files: [],
      folders: [
        { name: "taxes", files: ["2024.pdf"], folders: [] }
      ]
    }
  ]
};

// Solution:
function countFiles(folder) {
  // TODO: start with base count = number of files
  // TODO: loop over subfolders and recursively add counts
}



// Flatten a Deeply Nested Array
// Ex) flatten(arr) ➜ [1, 2, 3, 4, 5, 6]

// Solution:

// use the following array to test your function
const arr = [1, [2, [3, [4, 5]]], 6];
