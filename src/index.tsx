import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import "semantic-ui-css/semantic.min.css"
import "./index.css"
import "./styles/main.css"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import { setContext } from "@apollo/client/link/context"

const GRAPHQL_ENDPOINT = "https://green-feather-230024.ap-south-1.aws.cloud.dgraph.io/graphql"

const AuthorizedApolloProvider = ( {children } : {children:any}) => {

  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT,
  })

  const authLink = setContext(async (_, { headers }) => {

    if (!isAuthenticated) {
      return headers;
    }

   

    return {
      headers: {
        ...headers,
        "X-Auth-Token": "",
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}




ReactDOM.render(
  <Auth0Provider
    domain= "dev-ks27ry3i.us.auth0.com"
    clientId="whh24MfREISZib8lZ5bWEQhRq4TL1EMx"
    redirectUri={window.location.origin}
  >
    <AuthorizedApolloProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </AuthorizedApolloProvider>
 
  </Auth0Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
