// asynchronus programming and callbacks
// used when you cannot wait for another chunk to run before another chunk
// callbacks are used

// simple example is a timer
// setTimeout accepts 2 args. a function and the time pass before its executed
// setTimeout(function, time(ms))
console.log("This appears before async");

setTimeout(() => {
    console.log("This appears before the async");
}, 2000); // time is in milliseconds, runs after 2 secs

console.log("This still appears before the async");


