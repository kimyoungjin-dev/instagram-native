import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN = "TOKEN";

export const isLoggedInVar = makeVar(Boolean(AsyncStorage.getItem(TOKEN)));

export const logUserIn = async (token: string | null) => {
  await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
  isLoggedInVar(true);
};

export const logUserOut = async () => {
  AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
