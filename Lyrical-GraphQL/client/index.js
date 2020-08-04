import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const apolloClient = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

function Root() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <div className="container">
            <Route exact path="/" component={SongList} />
            <Route exact path="/songs/new" component={SongCreate} />
            <Route exact path="/songs/:id" component={SongDetail} />
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(<Root />, document.querySelector("#root"));
