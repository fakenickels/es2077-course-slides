'use strict';

var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");

var Types = { };

var fragmentConverter = ({});

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
  "name": "Header_siteStatistics",
  "type": "Query",
  "metadata": null,
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
