function simpleModuleFunction() {
  let array = [];

  return {
    add: function (value) {
      array.push(value);
    },
    remove: function () {
      array.pop();
    },
    list: function () {
      console.log(array);
    },
  };
}

module.exports = simpleModuleFunction;
