import { AUTH_KEY, AUTH_TYPE } from "@/store/app";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_URL_BACKEND + "/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem(AUTH_KEY);
  const type = window.localStorage.getItem(AUTH_TYPE);

  if (!token) {
    return;
  }

  return {
    headers: {
      ...headers,
      "X-AUTH-TOKEN": token ? `${type} ${token}` : "",
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  credentials: "include",
});

export default client;
