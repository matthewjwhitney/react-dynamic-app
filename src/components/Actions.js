import React from "react";
import { Button } from "@material-ui/core";

const Actions = props => {
  const { actions } = props;
  return actions.map(action => <Button>{action.label}</Button>);
};

export default Actions;
