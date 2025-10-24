// Challenge 1: Callback Execution Order

function greetUser(name, callback) {
  console.log("Hello, " + name);
  // Call the callback function here
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Future Code", /* pass the correct function */);



// Challenge 2: Callback in Array Iteration

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // Invoke the callback with the current element
  }
}

const nums = [10, 20, 30];
myForEach(nums, (num) => {
  console.log(num / 10);
});



// Challenge 3: Challenge 3: Delayed Execution

function delayedMessage(message, delay, callback) {
  console.log("Preparing message...");
  // Use setTimeout to delay printing the message, then call the callback
}

delayedMessage("Hello world!", 1500, () => {
  console.log("Message complete!");
});



// Challenge 4: Challenge 4: Sequential Callbacks

function stepOne(callback) {
  console.log("Step 1 complete");
  // Trigger the next step
}

function stepTwo(callback) {
  console.log("Step 2 complete");
  // Trigger the next step
}

function stepThree() {
  console.log("Step 3 complete");
}

// Chain the steps to run one after another



// Challenge 5: Simulated Async Operation

function fetchData(callback) {
  console.log("Fetching data...");
  // Simulate delay using setTimeout (1s)
  // After delay, call the callback with an object: { id: "Future", name: "Code" }
}

fetchData((data) => {
  console.log("Data received:", data);
});
