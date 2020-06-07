import React, { useState, useEffect } from "react";
import { makeStyles, Text } from "soleraui";
import { Switch, Route, Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Views from "./Views";
import Header from "./Header";
import Navigation from "./Navigation";
import usePrevious from "../../hooks";
import { queries } from "../../gql";

const useStyles = makeStyles(() => ({
  main: {
    flexGrow: 1,
    height: "100vh"
  }
}));

const Layout = props => {
  const { organization, setUserId, user, users } = props;
  const classes = useStyles();
  const [layoutId, setLayoutId] = useState(null);
  const { data, loading, error } = useQuery(queries.layouts, {
    variables: {
      orgId: organization.id,
      permissions: user.permissions
    }
  });
  const layouts = data?.layouts;
  const prevlayouts = usePrevious(layouts);
  useEffect(() => {
    if (layouts && layouts !== prevlayouts) {
      setLayoutId(layouts[0].id);
    }
  });
  const layout = layouts?.find(l => l.id === layoutId);
  return (
    <>
      {loading && <Text>Loading Layout...</Text>}
      {error && <Text>{JSON.stringify(error)}</Text>}
      {layout?.navigation && layout?.views && (
        <Navigation
          organizationLabel={organization.label}
          {...layout.navigation}
          views={layout.views}
        />
      )}
      <main className={classes.main}>
        {layout?.header && (
          <Header
            {...layout.header}
            layouts={layouts}
            setLayoutId={setLayoutId}
            // replace with apollo/login stuff
            users={users}
            setUserId={setUserId}
            // end replace
          />
        )}
        <Switch>
          <Route exact path="/">
            <Redirect to="/Dashboard" />
          </Route>
          {layout?.views.length > 0 && <Views path="/" views={layout.views} />}
        </Switch>
      </main>
    </>
  );
};

export default Layout;
