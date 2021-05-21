import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

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
//token을 헤더에 넣기위해서 setContext 사용 (setContext는 자동 import가 안됨으로 import경로를 알고있어야한다.)
//tokenVar안에 value를 넣지않고 호출만 한다면, 현재 value만을 받아온다.
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});

//authLink와 httpLink를 연결 해준다.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;
