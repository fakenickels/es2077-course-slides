// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function $$Image(Props) {
  var src = Props.src;
  return React.createElement("img", {
              className: Curry._1(Css.style, /* :: */[
                    Css.maxWidth(Css.pct(100)),
                    /* [] */0
                  ]),
              src: src
            });
}

var make = $$Image;

var $$default = $$Image;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* Css Not a pure module */
