import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

// cd DownLoads ⇒ 터미널
// ./ngrok http 4000 실행
