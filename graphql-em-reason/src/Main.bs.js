'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var ApolloHooksQuery = require("reason-apollo-hooks/src/ApolloHooksQuery.bs.js");
var Todos$RelaySibelius = require("./Todos.bs.js");
var Header$RelaySibelius = require("./Header.bs.js");
var MainQuery_graphql$RelaySibelius = require("./__generated__/MainQuery_graphql.bs.js");

var convertResponse = MainQuery_graphql$RelaySibelius.Internal.convertResponse;

var convertVariables = MainQuery_graphql$RelaySibelius.Internal.convertVariables;

var UseQuery = ReasonRelay.MakeUseQuery({
      query: MainQuery_graphql$RelaySibelius.node,
      convertResponse: convertResponse,
      convertVariables: convertVariables
    });

var use = UseQuery.use;

var Query_fetch = UseQuery.$$fetch;

var Query_fetchPromised = UseQuery.fetchPromised;

var Query_usePreloaded = UseQuery.usePreloaded;

var Query = {
  Operation: undefined,
  Types: undefined,
  UseQuery: UseQuery,
  use: use,
  $$fetch: Query_fetch,
  fetchPromised: Query_fetchPromised,
  usePreloaded: Query_usePreloaded
};

var ppx_printed_query = "query MainQuery  {\ntodos(offset: 0, limit: 100)  {\nresults  {\nid  \ntext  \ncompleted  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var value$2 = Js_dict.get(value$1, "todos");
  var tmp;
  if (value$2 !== undefined) {
    var value$3 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(value$2)));
    var value$4 = Js_dict.get(value$3, "results");
    tmp = {
      results: value$4 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(value$4))).map((function (value) {
                var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                var value$2 = Js_dict.get(value$1, "id");
                var tmp;
                if (value$2 !== undefined) {
                  var value$3 = Caml_option.valFromOption(value$2);
                  var value$4 = Js_json.decodeString(value$3);
                  tmp = value$4 !== undefined ? value$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                } else {
                  tmp = Js_exn.raiseError("graphql_ppx: Field id on type TodoItem is missing");
                }
                var value$5 = Js_dict.get(value$1, "text");
                var tmp$1;
                if (value$5 !== undefined) {
                  var value$6 = Caml_option.valFromOption(value$5);
                  var value$7 = Js_json.decodeString(value$6);
                  tmp$1 = value$7 !== undefined ? value$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
                } else {
                  tmp$1 = Js_exn.raiseError("graphql_ppx: Field text on type TodoItem is missing");
                }
                var value$8 = Js_dict.get(value$1, "completed");
                var tmp$2;
                if (value$8 !== undefined) {
                  var value$9 = Caml_option.valFromOption(value$8);
                  var match = Js_json.decodeNull(value$9);
                  if (match !== undefined) {
                    tmp$2 = undefined;
                  } else {
                    var value$10 = Js_json.decodeBoolean(value$9);
                    tmp$2 = value$10 !== undefined ? value$10 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$9));
                  }
                } else {
                  tmp$2 = undefined;
                }
                return {
                        id: tmp,
                        text: tmp$1,
                        completed: tmp$2
                      };
              })) : Js_exn.raiseError("graphql_ppx: Field results on type TodosPaginated is missing")
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field todos on type Query is missing");
  }
  return {
          todos: tmp
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function definition_002(graphql_ppx_use_json_variables_fn) {
  return 0;
}

var definition = /* tuple */[
  parse,
  ppx_printed_query,
  definition_002
];

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var QueryLoka = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function Main(Props) {
  var query = Curry._6(use, undefined, undefined, undefined, undefined, undefined, undefined);
  var match = ApolloHooksQuery.useQuery(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, definition);
  var simple = match[0];
  var tmp;
  tmp = typeof simple === "number" || simple.tag ? null : React.createElement(React.Fragment, undefined, Belt_Array.map(simple[0].todos.results, (function (todo) {
                return React.createElement("div", {
                            className: "bg-red-300 mt-2 p-2"
                          }, React.createElement("h3", undefined, todo.text));
              })));
  return React.createElement("div", {
              className: "p-10"
            }, React.createElement(Header$RelaySibelius.make, {
                  queryRef: Curry._1(query.getFragmentRefs, undefined)
                }), React.createElement(Todos$RelaySibelius.make, {
                  todosRef: Curry._1(query.getFragmentRefs, undefined)
                }), React.createElement("div", undefined, tmp));
}

var make$1 = Main;

exports.Query = Query;
exports.QueryLoka = QueryLoka;
exports.make = make$1;
/* UseQuery Not a pure module */
