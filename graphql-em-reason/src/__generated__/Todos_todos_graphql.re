/* @generated */

module Types = {
  type fragment_todos_results = {
    id: string,
    text: string,
    completed: option(bool),
  };
  type fragment_todos = {results: array(fragment_todos_results)};

  type fragment = {todos: fragment_todos};
};

module Internal = {
  type fragmentRaw;
  let fragmentConverter: Js.Dict.t(Js.Dict.t(Js.Dict.t(string))) = [%raw
    {json| {"__root":{"todos_results_completed":{"n":""}}} |json}
  ];
  let fragmentConverterMap = ();
  let convertFragment = v =>
    v
    ->ReasonRelay._convertObj(
        fragmentConverter,
        fragmentConverterMap,
        Js.undefined,
      );
};

type t;
type fragmentRef;
type fragmentRefSelector('a) = {.. "__$fragment_ref__Todos_todos": t} as 'a;
external getFragmentRef: fragmentRefSelector('a) => fragmentRef = "%identity";

module Utils = {};

type operationType = ReasonRelay.fragmentNode;

let node: operationType = [%raw
  {json| {
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
} |json}
];
