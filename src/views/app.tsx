import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseCatalogList from "./CourseCatalogList";
import FavoriteList from "./FavoriteList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      cacheTime: Infinity,
      retry: false,
      structuralSharing: false,
    },
    mutations: {
      // mutation options
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/favorite">
            <FavoriteList />
          </Route>
          <Route path="/">
            <CourseCatalogList />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
