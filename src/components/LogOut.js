import React from "react";
import Button from "react-bootstrap/Button";
import authStore from "../stores/authStore";

function LogOut() {
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.logOut();
  };
  return (
    <div>
      <Button variant="primary" className="logout" onClick={handleSubmit}>
        Log Out
      </Button>
    </div>
  );
}

export default LogOut;
