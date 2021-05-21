import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

// multiSet을 이용하여 token을 저장한다.
export const logUserIn = async (token: string) => {
  await AsyncStorage.multiSet([["token", token]]);
  tokenVar(token);
  isLoggedInVar(true);
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
export default client;
