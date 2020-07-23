'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var Header_siteStatistics_graphql$RelaySibelius = require("./__generated__/Header_siteStatistics_graphql.bs.js");

var convertFragment = Header_siteStatistics_graphql$RelaySibelius.Internal.convertFragment;

var UseFragment = ReasonRelay.MakeUseFragment({
      fragmentSpec: Header_siteStatistics_graphql$RelaySibelius.node,
      convertFragment: convertFragment
    });

function use(fRef) {
  return Curry._1(UseFragment.use, fRef);
}

function useOpt(opt_fRef) {
  return Curry._1(UseFragment.useOpt, opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined);
}

var HeaderFragment = {
  Operation: undefined,
  Types: undefined,
  UseFragment: UseFragment,
  use: use,
  useOpt: useOpt
};

function Header(Props) {
  var queryRef = Props.queryRef;
  var siteStatistics = Curry._1(UseFragment.use, queryRef);
  return React.createElement("div", undefined, React.createElement("p", undefined, "Bem vindo!"), React.createElement("p", undefined, siteStatistics.siteStatistics.weeklySales));
}

var make = Header;

exports.HeaderFragment = HeaderFragment;
exports.make = make;
/* UseFragment Not a pure module */
