'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var Todos_todos_graphql$RelaySibelius = require("./__generated__/Todos_todos_graphql.bs.js");

var convertFragment = Todos_todos_graphql$RelaySibelius.Internal.convertFragment;

var UseFragment = ReasonRelay.MakeUseFragment({
      fragmentSpec: Todos_todos_graphql$RelaySibelius.node,
      convertFragment: convertFragment
    });

function use(fRef) {
  return Curry._1(UseFragment.use, fRef);
}

function useOpt(opt_fRef) {
  return Curry._1(UseFragment.useOpt, opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined);
}

var TodosFragment = {
  Operation: undefined,
  Types: undefined,
  UseFragment: UseFragment,
  use: use,
  useOpt: useOpt
};

function Todos(Props) {
  var todosRef = Props.todosRef;
  var todos = Curry._1(UseFragment.use, todosRef);
  return React.createElement("div", undefined, Belt_Array.map(todos.todos.results, (function (todo) {
                    return React.createElement("div", {
                                key: todo.id,
                                className: "bg-yellow-300 mt-2 p-2"
                              }, React.createElement("h3", undefined, todo.text), React.createElement("p", undefined, Belt_Option.getWithDefault(todo.completed, false) ? "Completed" : "To do"));
                  })));
}

var make = Todos;

exports.TodosFragment = TodosFragment;
exports.make = make;
/* UseFragment Not a pure module */
