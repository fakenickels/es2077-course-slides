/**
 * This mounts the app to the DOM. Note that the environment is
 * passed to context via <ReasonRelay.Context.Provider /> here -
 * it's a requirement that the environment is available in the
 * context.
 */

/* Create an InMemoryCache */
let inMemoryCache = ApolloInMemoryCache.createInMemoryCache();

/* Create an HTTP Link */
let httpLink =
  ApolloLinks.createHttpLink(~uri="http://localhost:4000/graphql", ());

let client =
  ReasonApollo.createApolloClient(~link=httpLink, ~cache=inMemoryCache, ());

ReactExperimental.renderConcurrentRootAtElementWithId(
  <ReasonRelay.Context.Provider environment=RelayEnv.environment>
    <ApolloHooks.Provider client> <App /> </ApolloHooks.Provider>
  </ReasonRelay.Context.Provider>,
  "app",
);
