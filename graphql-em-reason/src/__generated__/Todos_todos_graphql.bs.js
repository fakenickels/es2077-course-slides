'use strict';

var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");

var Types = { };

var fragmentConverter = ({"__root":{"todos_results_completed":{"n":""}}});

function convertFragment(v) {
  return ReasonRelay._convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

var Utils = { };

var node = ({
  "kind": "Fragment",
  "name": "Todos_todos",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
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
});

exports.Types = Types;
exports.Internal = Internal;
exports.Utils = Utils;
exports.node = node;
/* fragmentConverter Not a pure module */
