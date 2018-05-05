// console.log('sim sim salabim');
// ref:
// https://medium.com/@ethanryan/lets-make-a-javascript-calculator-a81186cb912f
// https://medium.freecodecamp.org/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98

$(".btn").click(function(e) {
  var itemClicked = this.innerHTML;

  console.log("clicked:", this.innerHTML);

  $("#currentVal").html(itemClicked);
});

var globalRes;

// ADDITION
function storeRes(val) {
  var val = val;
  console.log('storeRes: ', val);
  globalRes = val;
  return val;
};

function getCurrentVal() {
  var currentVal = getElementById("currentVal").innerHTML;
  console.log(currentVal, typeof currentVal);
  // return currentVal;
};
getCurrentVal();
