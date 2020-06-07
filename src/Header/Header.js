import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography>Header</Typography>
      </Toolbar>
    </AppBar>
  );
}
