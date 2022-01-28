import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import jwt from "jsonwebtoken";

export const AUTH_KEY = "les-francs-token";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_URL_BACKEND + "/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem(AUTH_KEY);

  if (!token) {
    console.log("pas de token", token);
    return;
  }

  const decodedToken = jwt.decode(token, { json: true });
  if (!decodedToken || (decodedToken.exp ?? 0) * 1000 < new Date().getTime()) {
    window.localStorage.removeItem(AUTH_KEY);
    return;
  }

  console.log("token: ", token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
