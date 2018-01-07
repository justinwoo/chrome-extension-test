exports.makeAlert = function (str) {
  return function () {
    alert(str);
  };
};
