function foo() {
  console.log( this.a );
}

function doFoo() {
  foo();
}

var obj = {
  a: 1,
  doFoo: doFoo
};

var a = 2;
obj.doFoo()

// 浏览器
// 2

// Node.js
// undefined