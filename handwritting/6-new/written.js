function myNew(f, ...args) {
  let newObject = null;
  let result = null;

  if (typeof f !== "function") {
    console.error("It must be a function");
    return;
  }

  newObject = Object.create(f.prototype);
  result = Reflect.construct(f, args, f);

  return result && (typeof result === "function" || typeof result === "object") ? result : newObject;
}

class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }
}

let p = myNew(Person, "Jackson", 20);
p.sayName();