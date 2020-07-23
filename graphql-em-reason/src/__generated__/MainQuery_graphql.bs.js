'use strict';

var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");

var Types = { };

var responseConverter = ({"__root":{"":{"f":""}}});

function convertResponse(v) {
  return ReasonRelay._convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = ({});

function convertVariables(v) {
  return ReasonRelay._convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

var Utils = { };

var node = ((function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Header_siteStatistics",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "Todos_todos",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "siteStatistics",
        "storageKey": null,
        "args": null,
        "concreteType": "SiteStatistics",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "weeklySales",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todos",
        "storageKey": "todos(limit:100,offset:0)",
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 100
          },
          {
            "kind": "Literal",
            "name": "offset",
            "value": 0
          }
        ],
        "concreteType": "TodosPaginated",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "results",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoItem",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "completed",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MainQuery",
    "id": null,
    "text": "query MainQuery {\n  ...Header_siteStatistics\n  ...Todos_todos\n}\n\nfragment Header_siteStatistics on Query {\n  siteStatistics {\n    weeklySales\n    id\n  }\n}\n\nfragment Todos_todos on Query {\n  todos(offset: 0, limit: 100) {\n    results {\n      id\n      text\n      completed\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})());

var include = ReasonRelay.MakePreloadQuery({
      query: node,
      convertVariables: convertVariables
    });

var preload = include.preload;

var preloadTokenToObservable = include.preloadTokenToObservable;

var preloadTokenToPromise = include.preloadTokenToPromise;

exports.Types = Types;
exports.Internal = Internal;
exports.Utils = Utils;
exports.node = node;
exports.preload = preload;
exports.preloadTokenToObservable = preloadTokenToObservable;
exports.preloadTokenToPromise = preloadTokenToPromise;
/* responseConverter Not a pure module */
