import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

// multiSet을 이용하여 token을 저장한다.
export const logUserIn = async (token: string) => {
  await AsyncStorage.multiSet([["token", token]]);
  tokenVar(token);
  isLoggedInVar(true);
};

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
export default client;
