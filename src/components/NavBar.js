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
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {authStore.user ? (
              <>
                <p style={{ color: "red" }}> hello {authStore.user.username}</p>
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
    </div>
  );
}

export default observer(NavBar);
