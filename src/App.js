import "./styles.css"
import Login from './containers/Login';
import Main from './containers/Main';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import selectors from "./selectors";
import actions from "./actions";
import Navbar from "./components/Navbar";
import React from "react";

function App(props) {
  const {
    loggedIn,
    logIn,
    logInMessage,
    refreshAccessToken
  } = props

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ?
          <React.Fragment>
            <Navbar />
            <div style={{ height: "var(--navbar-height)" }} />
            <Main
            />
          </React.Fragment> :
          <Login
            logIn={logIn}
            logInMessage={logInMessage}
            refreshAccessToken={refreshAccessToken}
          />
        }
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (value1, value2) => dispatch(actions.logIn(value1, value2)),
    refreshAccessToken: () => dispatch(actions.refreshAccessToken())
  };
}

const mapStateToProps = createStructuredSelector({
  loggedIn: selectors.loggedIn,
  logInMessage: selectors.logInMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(App);