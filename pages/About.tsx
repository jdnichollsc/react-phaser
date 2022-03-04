import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  return (
    <div className="container">
      <p>Testing Phaser with React :)</p>
      <a href="https://github.com/jdnichollsc">by @jdnichollsc</a>
      <button onClick={() => history.push("/")} type="button">
        Home
      </button>
    </div>
  );
});
