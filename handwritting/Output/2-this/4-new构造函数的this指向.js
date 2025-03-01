var obj = {
  name: "Jackson",
  fun: function () {
    console.log(this.name);
  },
};
obj.fun(); // Jackson
new obj.fun(); // undefined
