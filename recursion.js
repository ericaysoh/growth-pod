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
  console.log("str:", str);
  reverseString(str.slice(1)) + str[0];
}

// Factorial - non-TCO
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// Factorial - Tail Call Optimization
function factorialTCO(n, num = 1) {
  if (n === 1) return num;
  return factorialTCO(n - 1, num * n);
}

// Count Items in a Nested Object:
// You’re given a nested object of folders and files.
// Write a recursive function countFiles(folder) that counts all files in all nested folders.

const folder = {
  name: "root",
  files: ["index.html", "style.css"],
  folders: [
    {
      name: "src",
      files: ["app.js", "utils.js"],
      folders: [],
    },
    {
      name: "server",
      files: [],
      folders: [
        { name: "controllers", files: ["swapiController.js"], folders: [] },
      ],
    },
  ],
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

/* 
DOM Traversal (real-life scenario):
Imagine the DOM:

<div id="root">
  <p>
    <span></span>
  </p>
  <section></section>
</div>


DOM tree:

div (id="root")
├── p
│   └── span
└── section

*/
function traverseDOM(node) {
  if (!node) return;

  console.log(node.tagName);

  const children = node.children;
  const totalChildren = children.length;

  if (totalChildren === 0) return;

  for (const child of children) {
    traverseDOM(child);
  }
}
