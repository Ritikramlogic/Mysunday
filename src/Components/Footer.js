import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLinksContainer>
          <NavLinkLogoWrapper>
            <div href="/" style={{ maxWidth: "250px" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/logoWhite.png"}
                alt="asjdjd"
                width="100%"
              ></img>
            </div>
            <p style={{ fontSize: "24px", color: "white" }}>
              Making your <br></br>church <br></br>tech-sawy
            </p>
          </NavLinkLogoWrapper>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">Pricing</NavLink>
            <NavLink href="/">Blog</NavLink>
            <NavLink href="/">Refer &amp; Earn</NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink href="/">Product</NavLink>
            <NavLink href="/">Login</NavLink>
            <NavLink href="/">Client IOS App</NavLink>
            <NavLink href="/">Client Android App</NavLink>
            <NavLink href="/">Help Center</NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink href="/">Company</NavLink>
            <NavLink href="/">Terms of use</NavLink>
            <NavLink href="/">Privacy Policy</NavLink>
            <NavLink href="/">Contact</NavLink>
          </NavLinks>
        </NavLinksContainer>

        <ApplicationLinksWrapper>
          <div style={{ display: "flex" }}>
            <div>
              {" "}
              <ApplicationLinks src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"></ApplicationLinks>
            </div>
            <div>
              <ApplicationLinks src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"></ApplicationLinks>
            </div>
          </div>
        </ApplicationLinksWrapper>
        {/* Footer Bottom Icon Container */}
        <FooterBottomWrapper>
          <SocialIconContainer>
            <SocialItem>
              <FaFacebookF />
            </SocialItem>
            <SocialItem>
              <FaInstagram />
            </SocialItem>
            <SocialItem>
              <FaYoutube />
            </SocialItem>
            <SocialItem>
              <FaTwitter />
            </SocialItem>
          </SocialIconContainer>
          <div style={{ color: "#fff" }}>
            © {new Date().getFullYear()} MySunday, LLC.{" "}
          </div>
        </FooterBottomWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #01a79d;
`;
const FooterWrapper = styled.div`
  padding: 70px 0;
  max-width: 968px;
  margin: 0 auto;
`;
const NavLinkLogoWrapper = styled.div`
  text-align: left;
  margin-left: 40px;
`;

const FooterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  flex-wrap: wrap;
  padding: 30px 0;
  border-top: 1px solid white;
`;
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 40px;
`;
const NavLink = styled.a`
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
  text-decoration: none;
`;
const ApplicationLinksWrapper = styled.div`
  height: 50px;
  display: flex;
  margin: 20px 0;
`;
const ApplicationLinks = styled.img`
  width: 100%;
  margin-right: 10px;
  max-width: 220px;
`;
const SocialIconContainer = styled.div`
  display: flex;
`;
const SocialItem = styled.span`
  margin-right: 20px;
  font-size: 30px;
  color: #fff;
`;
export default Footer;
