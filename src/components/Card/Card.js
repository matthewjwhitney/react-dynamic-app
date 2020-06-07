import React from "react";
import { Card as MUICard, CardHeader } from "@material-ui/core";
import CardContent from "./CardContent";
import CardActions from "./CardActions";

const Card = props => {
  const { header, content, actions } = props;

  return (
    <MUICard>
      {header && <CardHeader {...header} />}
      {content && <CardContent {...content} />}
      {actions && <CardActions {...actions} />}
    </MUICard>
  );
};

export default Card;
