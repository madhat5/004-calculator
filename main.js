// console.log('sim sim salabim');

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
