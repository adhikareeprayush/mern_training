class Student {
  // Constructor initializes the object of a class
  constructor(name, age) {
    console.log("Constructor called");
    this.age = age;
    this.name = name;
  }

  // Methods
  read() {
    console.log(`${this.name} is reading!`);
  }
}

// Creating an object
let student1 = new Student("Prayush Adhikari", 22);
student1.read();
