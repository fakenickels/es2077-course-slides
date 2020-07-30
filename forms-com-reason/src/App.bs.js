// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Api = require("./Api.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$Promise = require("reason-promise/src/js/promise.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReactUpdate = require("reason-react-update/src/ReactUpdate.bs.js");
var ReForm$BsReform = require("bs-reform/src/ReForm.bs.js");

function get(state, field) {
  switch (field) {
    case /* Name */0 :
        return state.name;
    case /* Age */1 :
        return state.age;
    case /* AcceptedTerms */2 :
        return state.acceptedTerms;
    
  }
}

function set(state, field, value) {
  switch (field) {
    case /* Name */0 :
        return {
                name: value,
                age: state.age,
                acceptedTerms: state.acceptedTerms
              };
    case /* Age */1 :
        return {
                name: state.name,
                age: value,
                acceptedTerms: state.acceptedTerms
              };
    case /* AcceptedTerms */2 :
        return {
                name: state.name,
                age: state.age,
                acceptedTerms: value
              };
    
  }
}

var StateLenses = {
  get: get,
  set: set
};

var SignUpForm = ReForm$BsReform.Make({
      set: set,
      get: get
    });

function use(fn) {
  var match = ReactUpdate.useReducer(/* Idle */0, (function (action, _state) {
          switch (action.TAG | 0) {
            case /* Fetch */0 :
                var promise = action._0;
                return {
                        TAG: /* UpdateWithSideEffects */1,
                        _0: /* Loading */1,
                        _1: (function (self) {
                            $$Promise.get(promise, (function (result) {
                                    if (result.TAG) {
                                      return Curry._1(self.send, {
                                                  TAG: /* SetError */2,
                                                  _0: result._0
                                                });
                                    } else {
                                      return Curry._1(self.send, {
                                                  TAG: /* SetData */1,
                                                  _0: result._0
                                                });
                                    }
                                  }));
                            
                          })
                      };
            case /* SetData */1 :
                return {
                        TAG: /* Update */0,
                        _0: {
                          TAG: /* Data */0,
                          _0: action._0
                        }
                      };
            case /* SetError */2 :
                return {
                        TAG: /* Update */0,
                        _0: {
                          TAG: /* Error */1,
                          _0: action._0
                        }
                      };
            
          }
        }));
  var send = match[1];
  var fetchWithArgs = Curry._1(fn, (function (request) {
          var promise = Curry._1(request, undefined);
          Curry._1(send, {
                TAG: /* Fetch */0,
                _0: promise
              });
          return promise;
        }));
  return [
          match[0],
          fetchWithArgs
        ];
}

var AsyncFetch = {
  use: use
};

function App(Props) {
  var match = use(function (cb, name, age, acceptedTerms) {
        return Curry._1(cb, (function (param) {
                      return Api.Person.request({
                                  name: name,
                                  age: age,
                                  acceptedTerms: acceptedTerms
                                });
                    }));
      });
  var personCreate = match[1];
  var personCreateState = match[0];
  var form = Curry._7(SignUpForm.use, {
        name: "",
        age: 0,
        acceptedTerms: false
      }, /* Schema */{
        _0: [
          {
            TAG: /* StringNonEmpty */2,
            _0: /* Name */0
          },
          {
            TAG: /* IntMin */6,
            _0: /* Age */1,
            _1: 16
          },
          {
            TAG: /* Custom */10,
            _0: /* AcceptedTerms */2,
            _1: (function (values) {
                if (values.acceptedTerms) {
                  return /* Valid */0;
                } else {
                  return /* Error */{
                          _0: "Idade não aceita para este tipo de rolê"
                        };
                }
              })
          }
        ]
      }, (function (form) {
          var values = form.state.values;
          $$Promise.get(Curry._3(personCreate, values.name, values.age, values.acceptedTerms), (function (response) {
                  console.log(response._0);
                  
                }));
          console.log(form.state.values);
          
        }), undefined, undefined, undefined, undefined);
  var tmp;
  tmp = typeof personCreateState === "number" ? (
      personCreateState === /* Idle */0 ? null : "Loading"
    ) : (
      personCreateState.TAG ? "Algo deu errado" : personCreateState._0.id
    );
  return React.createElement(SignUpForm.Provider.make, Curry._3(SignUpForm.Provider.makeProps, form, React.createElement("div", undefined, React.createElement(SignUpForm.Field.make, {
                          field: /* Name */0,
                          render: (function (param) {
                              var handleChange = param.handleChange;
                              return React.createElement("p", undefined, "Nome", React.createElement("p", undefined, React.createElement("input", {
                                                  type: "text",
                                                  value: param.value,
                                                  onChange: (function ($$event) {
                                                      return Curry._1(handleChange, $$event.target.value);
                                                    })
                                                })), React.createElement("p", undefined, Belt_Option.getWithDefault(param.error, "")));
                            })
                        }), React.createElement(SignUpForm.Field.make, {
                          field: /* Age */1,
                          render: (function (param) {
                              var handleChange = param.handleChange;
                              return React.createElement("p", undefined, "Nome", React.createElement("p", undefined, React.createElement("input", {
                                                  type: "number",
                                                  value: String(param.value),
                                                  onChange: (function ($$event) {
                                                      var value = $$event.target.value;
                                                      return Curry._1(handleChange, Caml_format.caml_int_of_string(value));
                                                    })
                                                })), React.createElement("p", undefined, Belt_Option.getWithDefault(param.error, "")));
                            })
                        }), React.createElement(SignUpForm.Field.make, {
                          field: /* AcceptedTerms */2,
                          render: (function (param) {
                              var handleChange = param.handleChange;
                              return React.createElement("p", undefined, "Nome", React.createElement("p", undefined, React.createElement("input", {
                                                  type: "checkbox",
                                                  value: Pervasives.string_of_bool(param.value),
                                                  onChange: (function ($$event) {
                                                      return Curry._1(handleChange, $$event.target.checked);
                                                    })
                                                })), React.createElement("p", undefined, Belt_Option.getWithDefault(param.error, "")));
                            })
                        }), React.createElement("button", {
                          onClick: (function (_e) {
                              return Curry._1(form.submit, undefined);
                            })
                        }, "Enviar"), React.createElement("div", undefined, tmp)), undefined));
}

var make = App;

exports.StateLenses = StateLenses;
exports.SignUpForm = SignUpForm;
exports.AsyncFetch = AsyncFetch;
exports.make = make;
/* SignUpForm Not a pure module */