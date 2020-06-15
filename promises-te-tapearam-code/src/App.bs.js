// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function let_(promise, map) {
  return promise.then(Curry.__1(map));
}

var Await = {
  let_: let_
};

function let_$1(react, map) {
  return Curry._1(react, map);
}

var ReactTop = {
  let_: let_$1
};

function App$GiveMeValue(Props) {
  return Curry._1(Props.children, "Helo from give me");
}

var GiveMeValue = {
  make: App$GiveMeValue
};

function usePromise(param) {
  var match = React.useState((function () {
          return "Aguarde...";
        }));
  var setMessage = match[1];
  React.useEffect((function () {
          var data = Promise.resolve("Hello");
          data.then((function (res) {
                  Curry._1(setMessage, (function (param) {
                          return res;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  return match[0];
}

function App(Props) {
  var message = usePromise(undefined);
  var cb = function (value) {
    return React.createElement("p", undefined, message + value);
  };
  return React.createElement(App$GiveMeValue, {
              children: cb
            });
}

var make = App;

exports.Await = Await;
exports.ReactTop = ReactTop;
exports.GiveMeValue = GiveMeValue;
exports.usePromise = usePromise;
exports.make = make;
/* react Not a pure module */
