import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";
const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <p>Agent Number: {context.data.agent}</p>
          <p>Mission Status: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Choose to Accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
