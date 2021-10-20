import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import LogOut from "./LogOut";
import { observer } from "mobx-react";
import AddJam3yaModal from "./AddJam3yaModal";

function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "#E67F0D" }}
      className="navbar"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Nav className="me-auto">
          {authStore.user ? (
            <>
              <p className="username"> Hello {authStore.user.username}</p>
              <AddJam3yaModal />

              <LogOut />
            </>
          ) : (
            <>
              <SignUpModal />
              <SignInModal />
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
