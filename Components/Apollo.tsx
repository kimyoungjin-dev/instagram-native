import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://5b45e4414617.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
