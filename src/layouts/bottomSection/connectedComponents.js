import React from "react";
import { connect } from "react-redux";
import {
  onStartStopButtonClick
} from "../../actionCreators";

import AudioCtxContext from "../../audioCtxContext";

// Components
import Button from "../../components/button";

export const ConnectedStartStopButton = (() => {
  const mapDispatchToProps = (dispatch, { requestInit }) => ({
    onClick: () => {
      requestInit();
      dispatch(onStartStopButtonClick());
    },
  });

  const mapStateToProps = state => ({
  });

  const ConnectedButton = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Button);

  return rootProps => (
    <AudioCtxContext.Consumer>
      {({ requestInit }) => (
        <ConnectedButton requestInit={requestInit} {...rootProps} />
      )}
    </AudioCtxContext.Consumer>
  );
})();

