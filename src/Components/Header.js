import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <a href="/" style={{ maxWidth: "180px" }}>
            <img
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="imr"
              width="100%"
            ></img>
          </a>
          <div style={{ flex: 1 }}></div>
          <NavLinksContainer>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">Features</NavLink>
            <NavLink href="/">Testimonials</NavLink>
            <NavLink href="/">FAQ</NavLink>
            <NavLink href="/">Login</NavLink>
          </NavLinksContainer>

          <div
            style={{
              borderRadius: "10px",
              padding: "10px 30px",
              background: "#ececec",
            }}
          >
            Get Started
          </div>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  height: 70px;
  align-items: center;
  padding: 0px 20px;
  position: sticky;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;
const NavLinksContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: #000;
  padding: 20px 25px;
`;
export default Header;
