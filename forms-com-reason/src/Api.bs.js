// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Decco = require("decco/src/Decco.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var $$Promise = require("reason-promise/src/js/promise.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function toJsonResult(promise) {
  return $$Promise.Js.toResult($$Promise.Js.fromBsPromise(promise.then(function (prim) {
                      return prim.json();
                    })));
}

function combineRequestOrDeccoError(promise, decoder) {
  return $$Promise.flatMapOk($$Promise.mapError(promise, (function (error) {
                    return {
                            NAME: "ResponseError",
                            VAL: error
                          };
                  })), (function (json) {
                var ok = Curry._1(decoder, json);
                var tmp;
                tmp = ok.TAG ? ({
                      TAG: /* Error */1,
                      _0: {
                        NAME: "DeccoError",
                        VAL: ok._0
                      }
                    }) : ({
                      TAG: /* Ok */0,
                      _0: ok._0
                    });
                return $$Promise.resolved(tmp);
              }));
}

function payload_encode(v) {
  return Js_dict.fromArray([
              [
                "name",
                Decco.stringToJson(v.name)
              ],
              [
                "age",
                Decco.intToJson(v.age)
              ],
              [
                "acceptedTerms",
                Decco.boolToJson(v.acceptedTerms)
              ]
            ]);
}

function payload_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var dict$1 = dict._0;
  var name = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "name"), null));
  if (name.TAG) {
    var e = name._0;
    return {
            TAG: /* Error */1,
            _0: {
              path: ".name" + e.path,
              message: e.message,
              value: e.value
            }
          };
  }
  var age = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "age"), null));
  if (age.TAG) {
    var e$1 = age._0;
    return {
            TAG: /* Error */1,
            _0: {
              path: ".age" + e$1.path,
              message: e$1.message,
              value: e$1.value
            }
          };
  }
  var acceptedTerms = Decco.boolFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "acceptedTerms"), null));
  if (!acceptedTerms.TAG) {
    return {
            TAG: /* Ok */0,
            _0: {
              name: name._0,
              age: age._0,
              acceptedTerms: acceptedTerms._0
            }
          };
  }
  var e$2 = acceptedTerms._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".acceptedTerms" + e$2.path,
            message: e$2.message,
            value: e$2.value
          }
        };
}

function response_encode(v) {
  return Js_dict.fromArray([
              [
                "id",
                Decco.stringToJson(v.id)
              ],
              [
                "name",
                Decco.stringToJson(v.name)
              ],
              [
                "age",
                Decco.intToJson(v.age)
              ]
            ]);
}

function response_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var dict$1 = dict._0;
  var id = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "id"), null));
  if (id.TAG) {
    var e = id._0;
    return {
            TAG: /* Error */1,
            _0: {
              path: ".id" + e.path,
              message: e.message,
              value: e.value
            }
          };
  }
  var name = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "name"), null));
  if (name.TAG) {
    var e$1 = name._0;
    return {
            TAG: /* Error */1,
            _0: {
              path: ".name" + e$1.path,
              message: e$1.message,
              value: e$1.value
            }
          };
  }
  var age = Decco.intFromJson(Belt_Option.getWithDefault(Js_dict.get(dict$1, "age"), null));
  if (!age.TAG) {
    return {
            TAG: /* Ok */0,
            _0: {
              id: id._0,
              name: name._0,
              age: age._0
            }
          };
  }
  var e$2 = age._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".age" + e$2.path,
            message: e$2.message,
            value: e$2.value
          }
        };
}

function request(payload) {
  var body = JSON.stringify(payload_encode(payload));
  var headers = {
    "Content-Type": "application/json"
  };
  return combineRequestOrDeccoError(toJsonResult(fetch("http://localhost:3001/", Fetch.RequestInit.make(/* Post */2, Caml_option.some(headers), Caml_option.some(body), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined))), response_decode);
}

var Person = {
  payload_encode: payload_encode,
  payload_decode: payload_decode,
  response_encode: response_encode,
  response_decode: response_decode,
  request: request
};

exports.toJsonResult = toJsonResult;
exports.combineRequestOrDeccoError = combineRequestOrDeccoError;
exports.Person = Person;
/* Promise Not a pure module */
