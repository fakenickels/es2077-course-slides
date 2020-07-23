'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
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

function Main(Props) {
  var query = Curry._6(use, undefined, undefined, undefined, undefined, undefined, undefined);
  return React.createElement("div", {
              className: "p-10"
            }, React.createElement(Header$RelaySibelius.make, {
                  queryRef: Curry._1(query.getFragmentRefs, undefined)
                }), React.createElement(Todos$RelaySibelius.make, {
                  todosRef: Curry._1(query.getFragmentRefs, undefined)
                }));
}

var make = Main;

exports.Query = Query;
exports.make = make;
/* UseQuery Not a pure module */
