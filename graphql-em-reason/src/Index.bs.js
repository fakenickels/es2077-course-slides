'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var App$RelaySibelius = require("./App.bs.js");
var ReactExperimental = require("reason-relay/src/ReactExperimental.bs.js");
var ReactHooks = require("@apollo/react-hooks");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");
var RelayEnv$RelaySibelius = require("./RelayEnv.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache(undefined, undefined, undefined);

var httpLink = ApolloLinks.createHttpLink("http://localhost:4000/graphql", undefined, undefined, undefined, undefined, undefined, undefined);

var client = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, undefined);

ReactExperimental.renderConcurrentRootAtElementWithId(React.createElement(ReasonRelay.Context.Provider.make, Curry._4(ReasonRelay.Context.Provider.makeProps, RelayEnv$RelaySibelius.environment, React.createElement(ReactHooks.ApolloProvider, {
                  client: client,
                  children: React.createElement(App$RelaySibelius.make, { })
                }), undefined, undefined)), "app");

exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.client = client;
/* inMemoryCache Not a pure module */
