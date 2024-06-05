class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running");
  }

  shout() {
    console.log(this.name + " is shouting");
  }

  lor() {
    console.log(this.name + " is of " + this.color + " color");
  }
}

class Monkey extends Animal {
  eatbanana() {
    console.log(this.name + " is eating Banana");
  }
}

const ani = new Animal("Arham", "red");
const bliss = new Monkey("hello", "green");

ani.run();
ani.shout();
ani.lor();

bliss.run();
