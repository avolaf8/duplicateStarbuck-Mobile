import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://d26d-139-228-111-126.ngrok-free.app",
  cache: new InMemoryCache(),
});

export default client;
