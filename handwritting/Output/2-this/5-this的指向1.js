var obj = {
  say: function() {
    var f1 = () =>  {
      console.log("1111", this);
    }
    f1();
  },
  pro: {
    getPro:() =>  {
      console.log(this);
    }
  }
}
var o = obj.say;
o();
obj.say();
obj.pro.getPro();

// 1111 window对象
// 1111 obj对象
// window对象