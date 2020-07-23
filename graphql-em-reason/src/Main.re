module Query = [%relay.query {|
  query MainQuery {
    ...Header_siteStatistics
    ...Todos_todos
  }
|}];

module QueryLoka = [%graphql {|
  query MainQuery {
    todos(offset: 0, limit: 100) {
      results {
        id
        text
        completed
      }
    }
  }
|}];

[@react.component]
let make = () => {
  let query = Query.use(~variables=(), ());
  let (simple, _) = ApolloHooks.Query.useQuery(QueryLoka.definition);

  <div className="p-10">
    <Header queryRef=query.getFragmentRefs() />
    <Todos todosRef=query.getFragmentRefs()/>
    <div>
      {switch(simple) {
        | Data(data) => {
          <>
            {
              data##todos##results->Belt.Array.map(todo => {
                <div className="bg-red-300 mt-2 p-2">
                  <h3>{todo##text->React.string}</h3>
                </div>
              })->React.array
            }
          </>
        }
        | _ => React.null
      }}
    </div>
  </div>;
};
