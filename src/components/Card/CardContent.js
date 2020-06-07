import React from "react";
import { CardContent as MUICardContent } from "@material-ui/core";
import RenderComponents from "..";

const CardContent = props => {
  const { components } = props;

  return (
    <MUICardContent>
      <RenderComponents components={components} />
    </MUICardContent>
  );
};

export default CardContent;
