'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var App$RelaySibelius = require("./App.bs.js");
var ReactExperimental = require("reason-relay/src/ReactExperimental.bs.js");
var RelayEnv$RelaySibelius = require("./RelayEnv.bs.js");

ReactExperimental.renderConcurrentRootAtElementWithId(React.createElement(ReasonRelay.Context.Provider.make, Curry._4(ReasonRelay.Context.Provider.makeProps, RelayEnv$RelaySibelius.environment, React.createElement(App$RelaySibelius.make, { }), undefined, undefined)), "app");

/*  Not a pure module */
