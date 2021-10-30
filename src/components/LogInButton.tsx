import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "semantic-ui-react";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button className="dgraph-btn" onClick={loginWithRedirect}>
        Login
    </Button>
  );
};

export default LogInButton;