// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReForm$BsReform = require("bs-reform/src/ReForm.bs.js");

function FastForm$Checkbox(Props) {
  var value = Props.value;
  var onChange = Props.onChange;
  var label = Props.label;
  var error = Props.error;
  return React.createElement("div", {
              className: "mb-6"
            }, React.createElement("div", {
                  className: "md:flex md:items-center"
                }, React.createElement("label", {
                      className: "md:w-2/3 block text-gray-500 font-bold"
                    }, React.createElement("input", {
                          className: "mr-2 leading-tight",
                          type: "checkbox",
                          value: value,
                          onChange: (function ($$event) {
                              return Curry._1(onChange, $$event.target.checked);
                            })
                        }), React.createElement("span", {
                          className: "text-sm"
                        }, label))), React.createElement("p", {
                  className: "text-red-500 text-xs italic"
                }, Belt_Option.getWithDefault(error, "")));
}

var Checkbox = {
  make: FastForm$Checkbox
};

function FastForm$TextField(Props) {
  var value = Props.value;
  var onChange = Props.onChange;
  var label = Props.label;
  var error = Props.error;
  var placeholder = Props.placeholder;
  var type_ = Props.type_;
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2"
                }, label), React.createElement("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  placeholder: placeholder,
                  type: type_,
                  value: value,
                  onChange: (function ($$event) {
                      return Curry._1(onChange, $$event.target.value);
                    })
                }), React.createElement("p", {
                  className: "text-red-500 text-xs italic"
                }, Belt_Option.getWithDefault(error, "")));
}

var TextField = {
  make: FastForm$TextField
};

function Make(Config) {
  var Form = ReForm$BsReform.Make(Config);
  var FastForm$Make = function (Props) {
    var schema = Props.schema;
    var initialState = Props.initialState;
    var onSubmit = Props.onSubmit;
    var reform = Curry._7(Form.use, initialState, schema, onSubmit, undefined, undefined, undefined, undefined);
    return React.createElement("div", {
                className: "w-full max-w-xs"
              }, React.createElement("div", {
                    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  }, React.createElement(Form.Provider.make, Curry._3(Form.Provider.makeProps, reform, null, undefined), Belt_Array.map(schema._0, (function (validator) {
                              switch (validator.TAG | 0) {
                                case /* Email */0 :
                                    var match = validator.meta;
                                    if (match === undefined) {
                                      return null;
                                    }
                                    if (match.kind !== 1) {
                                      return null;
                                    }
                                    var label = match.label;
                                    var placeholder = match.placeholder;
                                    return React.createElement(Form.Field.make, {
                                                field: validator.field,
                                                render: (function (api) {
                                                    var tmp = {
                                                      value: api.value,
                                                      onChange: (function (value) {
                                                          return Curry._1(api.handleChange, value);
                                                        }),
                                                      label: label,
                                                      placeholder: placeholder,
                                                      type_: "email"
                                                    };
                                                    if (api.error !== undefined) {
                                                      tmp.error = Caml_option.valFromOption(api.error);
                                                    }
                                                    return React.createElement(FastForm$TextField, tmp);
                                                  })
                                              });
                                case /* NoValidation */1 :
                                    return null;
                                case /* StringNonEmpty */2 :
                                    var match$1 = validator.meta;
                                    if (match$1 === undefined) {
                                      return null;
                                    }
                                    if (match$1.kind !== 1) {
                                      return null;
                                    }
                                    var label$1 = match$1.label;
                                    var placeholder$1 = match$1.placeholder;
                                    return React.createElement(Form.Field.make, {
                                                field: validator.field,
                                                render: (function (api) {
                                                    var tmp = {
                                                      value: api.value,
                                                      onChange: (function (value) {
                                                          return Curry._1(api.handleChange, value);
                                                        }),
                                                      label: label$1,
                                                      placeholder: placeholder$1,
                                                      type_: "text"
                                                    };
                                                    if (api.error !== undefined) {
                                                      tmp.error = Caml_option.valFromOption(api.error);
                                                    }
                                                    return React.createElement(FastForm$TextField, tmp);
                                                  })
                                              });
                                case /* IntMin */6 :
                                    var match$2 = validator.meta;
                                    if (match$2 === undefined) {
                                      return null;
                                    }
                                    if (match$2.kind !== 1) {
                                      return null;
                                    }
                                    var label$2 = match$2.label;
                                    var placeholder$2 = match$2.placeholder;
                                    return React.createElement(Form.Field.make, {
                                                field: validator.field,
                                                render: (function (api) {
                                                    var tmp = {
                                                      value: String(api.value),
                                                      onChange: (function (value) {
                                                          return Curry._1(api.handleChange, Caml_format.caml_int_of_string(value));
                                                        }),
                                                      label: label$2,
                                                      placeholder: placeholder$2,
                                                      type_: "number"
                                                    };
                                                    if (api.error !== undefined) {
                                                      tmp.error = Caml_option.valFromOption(api.error);
                                                    }
                                                    return React.createElement(FastForm$TextField, tmp);
                                                  })
                                              });
                                case /* Custom */10 :
                                    var match$3 = validator.meta;
                                    if (match$3 === undefined) {
                                      return null;
                                    }
                                    if (match$3.kind < 2) {
                                      return null;
                                    }
                                    var label$3 = match$3.label;
                                    return React.createElement(Form.Field.make, {
                                                field: validator.field,
                                                render: (function (api) {
                                                    var tmp = {
                                                      value: Pervasives.string_of_bool(api.value),
                                                      onChange: (function (value) {
                                                          return Curry._1(api.handleChange, value);
                                                        }),
                                                      label: label$3
                                                    };
                                                    if (api.error !== undefined) {
                                                      tmp.error = Caml_option.valFromOption(api.error);
                                                    }
                                                    return React.createElement(FastForm$Checkbox, tmp);
                                                  })
                                              });
                                default:
                                  return null;
                              }
                            })), React.createElement("button", {
                            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                            type: "button",
                            onClick: (function (param) {
                                return Curry._1(reform.submit, undefined);
                              })
                          }, "Entrar"))));
  };
  return {
          Form: Form,
          make: FastForm$Make,
          ReSchema: Form.ReSchema,
          Validation: Form.Validation,
          getInitialFieldsState: Form.getInitialFieldsState,
          formContext: Form.formContext,
          useFormContext: Form.useFormContext,
          useField: Form.useField,
          Provider: Form.Provider,
          Field: Form.Field,
          use: Form.use
        };
}

exports.Checkbox = Checkbox;
exports.TextField = TextField;
exports.Make = Make;
/* react Not a pure module */
