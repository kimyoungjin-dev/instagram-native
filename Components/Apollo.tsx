import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

// multiSet을 이용하여 token을 저장한다.

export const logUserIn = async (token: string) => {
  await AsyncStorage.setItem("token", token);
  isLoggedInVar(true);
  tokenVar(token);
};
//create logOut fuction :isLoggedInUser(false)
export const logUserOut = async () => {
  await AsyncStorage.removeItem("token");
  isLoggedInVar(false);
  tokenVar("");
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
//fetchMore을 사용하기위한 조건은 새롭게 추가된 데이터를 cache에 반영하도록 해준다.
//typePolicies apollo 에게 type을 설정 할 수 있도록 한다.
//apollo는 쿼리를 독립된 폴더에 저장을 하는데, 기존page , 변경된 page는 독립되어 저장되지 않도록 해준다.
//keyArgs : seeFeed의 변수를 하나의 폴더에 저장하는 셈이다.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          seeFeed: {
            keyArgs: false,
            merge(existing = [], incoming = []) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});
export default client;
