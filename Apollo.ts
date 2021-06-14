import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

export const TOKEN = "TOKEN";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token: string | null) => {
  await AsyncStorage.setItem(TOKEN, token!);
  isLoggedInVar(true);
  tokenVar(token!);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar("");
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});

const httpLinks = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLinks),
});

export default client;
