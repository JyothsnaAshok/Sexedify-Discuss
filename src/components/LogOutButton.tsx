import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "semantic-ui-react";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className="dgraph-btn" onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }>
        Logout
    </Button>
  );
};

export default LogOutButton;