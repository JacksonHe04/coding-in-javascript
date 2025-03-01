function myInstanceOf (obj, f) {
  let proto = Object.getPrototypeOf(obj);
  const prototype = f.prototype;

  while(true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

function Animal() {};
const Dog = new Animal();
console.log(myInstanceOf(Dog, Animal));