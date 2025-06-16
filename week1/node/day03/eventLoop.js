const fs = require("fs");

console.log("synchronous");

process.nextTick(()=>{
    console.log("microtask queue");
    
})

setTimeout(() =>{
    console.log("setTimeout");
    
})

setImmediate(()=>{
    console.log("task set immidiatly");
    
})

console.log("end synchronous");

// synchronous code which is blocking is executed at the very first
// process.nextTick is microtask it runs before any setTimeout or i/o
// setTime out is sent to timersQueue

// order of esynchronous
// end synchronous
// microtask queue
// setTimeout
// task set immidiatlyxecution:
// miccrotasks has the highest priority

// EXERCISE 2-------------------------------
// SYNC VS ASYNC OPS

console.log("A");
console.log("B");

// this is a synchronous code it will run in sequence line by line

console.log("A");

setTimeout(()=>{
    console.log("b");
    
},1000)

console.log("c");



// output:
// A
// b
// c
// the setTime is asynchronous non blocking code it 
// runs in the background while rest of the code is executed