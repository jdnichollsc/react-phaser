import React, { useRef } from "react";
import { withRouter } from "react-router-dom";

import { useGame } from "../hooks";
import gameConfig from "../game";

export default withRouter(({ history }) => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);

  return (
    <div className="container">
      <div ref={parentEl} className="gameContainer" />
      <button onClick={() => history.push("/about")} type="button">
        About
      </button>
    </div>
  );
});
