import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import ListArtists from "./Components/ListArtists";
import ArtistProfile from "./Components/ArtistProfile";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql err ${message}`);
      return false;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://metaphysics-production.artsy.net" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <ListArtists />
          </Route>
          <Route path="/profile/:id" exact>
            <ArtistProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
