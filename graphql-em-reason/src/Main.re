module Query = [%relay.query {|
  query MainQuery {
    ...Header_siteStatistics
    ...Todos_todos
  }
|}];

[@react.component]
let make = () => {
  let query = Query.use(~variables=(), ());

  <div className="p-10">
    <Header queryRef=query.getFragmentRefs() />
    <Todos todosRef=query.getFragmentRefs()/>
  </div>;
};
