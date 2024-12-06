import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import "./styles/index.css";

// Set up the Apollo Client with the GraphQL server's URL
const httpLink = createHttpLink({
  uri: "https://comp308-backend-server.onrender.com/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <div className='shell-app-container'>
        <App />
      </div>
    </ApolloProvider>
  </StrictMode>
);
