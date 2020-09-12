// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Api = require("./Api.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$Promise = require("reason-promise/src/js/promise.js");
var FastForm = require("./FastForm.bs.js");
var AsyncHook = require("reason-async-hook/src/AsyncHook.bs.js");
var ReForm$BsReform = require("bs-reform/src/ReForm.bs.js");

function get(values, field) {
  switch (field) {
    case /* Name */0 :
        return values.name;
    case /* Age */1 :
        return values.age;
    case /* AcceptedTerms */2 :
        return values.acceptedTerms;
    
  }
}

function set(values, field, value) {
  switch (field) {
    case /* Name */0 :
        return {
                name: value,
                age: values.age,
                acceptedTerms: values.acceptedTerms
              };
    case /* Age */1 :
        return {
                name: values.name,
                age: value,
                acceptedTerms: values.acceptedTerms
              };
    case /* AcceptedTerms */2 :
        return {
                name: values.name,
                age: values.age,
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

var SignUpFastForm = FastForm.Make({
      set: set,
      get: get
    });

function FastWay(Props) {
  var match = AsyncHook.use(function (cb, name, age, acceptedTerms) {
        return Curry._1(cb, (function (param) {
                      return Api.Person.request({
                                  name: name,
                                  age: age,
                                  acceptedTerms: acceptedTerms
                                });
                    }));
      });
  var personCreate = match[1];
  var personCreateState = match[0].state;
  var schema = /* Schema */{
    _0: Curry._2(SignUpForm.ReSchema.Validation.$plus, Curry._2(SignUpForm.ReSchema.Validation.$plus, Curry._3(SignUpForm.ReSchema.Validation.nonEmpty, undefined, {
                  placeholder: "Maria da Silva",
                  label: "Nome",
                  kind: /* Normal */1
                }, /* Name */0), Curry._6(SignUpForm.ReSchema.Validation.$$int, 16, undefined, undefined, undefined, {
                  placeholder: "18",
                  label: "Idade",
                  kind: /* Normal */1
                }, /* Age */1)), Curry._3(SignUpForm.ReSchema.Validation.custom, (function (values) {
                if (values.acceptedTerms) {
                  return /* Valid */0;
                } else {
                  return {
                          TAG: /* Error */1,
                          _0: "Aceite os termos de uso"
                        };
                }
              }), {
              placeholder: "",
              label: "Aceita os termos de uso?",
              kind: /* Checkbox */2
            }, /* AcceptedTerms */2))
  };
  var onSubmit = function (form) {
    var values = form.state.values;
    $$Promise.get(Curry._3(personCreate, values.name, values.age, values.acceptedTerms), (function (response) {
            console.log(response._0);
            
          }));
    console.log(form.state.values);
    
  };
  var tmp;
  tmp = typeof personCreateState === "number" ? (
      personCreateState === /* Idle */0 ? null : "Loading"
    ) : (
      personCreateState.TAG ? "Algo deu errado" : personCreateState._0.id
    );
  return React.createElement("div", undefined, React.createElement(SignUpFastForm.make, {
                  schema: schema,
                  initialState: {
                    name: "",
                    age: 0,
                    acceptedTerms: false
                  },
                  onSubmit: onSubmit
                }), React.createElement("div", undefined, tmp));
}

var make = FastWay;

exports.StateLenses = StateLenses;
exports.SignUpForm = SignUpForm;
exports.SignUpFastForm = SignUpFastForm;
exports.make = make;
/* SignUpForm Not a pure module */