import React from "react";
import { Card } from "./Card";
import Typography from "./Typography";

// allow components to be imported and rendered directly from components folder
export { Card, Typography };

// allow components to be rendered dynamically using componentLibrary[type]
const componentLibrary = {
  Card,
  Typography
};

export default function RenderComponents(props) {
  const { components } = props;

  return components.map(component => {
    const Component = componentLibrary[component.type];

    return <Component key={component.id} {...component.props} />;
  });
}
