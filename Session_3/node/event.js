// EventEmitter class lai import garim
const EventEmitter = require("events");

// EventEmitter ko euta object banaim
const myEmitter = new EventEmitter();

myEmitter.on("click", function () {
  console.log("myEmitter is Clicked");
});

myEmitter.on("greet", (name) => {
  console.log(`Hello! ${name}, How are you?`);
});

// myEmitter.emit("click");
myEmitter.emit("greet", "Prayush");
