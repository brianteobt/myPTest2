// Empty constructor
function myPTest2() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
myPTest2.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'myPTest2', 'show', [options]);
}

// Installation constructor that binds myPTest2 to window
myPTest2.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.myPTest2 = new myPTest2();
  return window.plugins.myPTest2;
};
cordova.addConstructor(myPTest2.install);