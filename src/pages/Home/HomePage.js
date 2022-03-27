import React from "react";
import styled from "styled-components";
import FaqList from "../../Components/FAQ/FaqList";
import { TiGroup } from "react-icons/ti";
import { BiDumbbell } from "react-icons/bi";
import {
  IoVideocamOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { BiCalendar, BiCheckCircle } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import Slider from "../../Components/Slider/Slider";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Main>
        <Section1Container>
          <div
            style={{
              maxWidth: "732px",
              width: "100%",
              marginTop: "30px",
              marginBottom: "60px",
            }}
          >
            <h1>Engage Your Community Anywhere At Anytime.</h1>
            <p style={{ marginRight: "60px" }}>
              Your church and online community is looking a little bit
              "different" now-a-days. That's why we created a free platform to
              help you manage it!
            </p>
          </div>
          <Section1IteamWrapper>
            <div>
              <img
                src="https://assets-global.website-files.com/61711827199c39768e329c82/61711827199c3900a6329cb3_76.svg"
                alt="icon"
              ></img>
              <h3>Your Church Media</h3>
              <p>
                Centralize your live service videos and audio sermon messages in
                one place and remove the distractions of other streamlining
                platforms.
              </p>
            </div>
            <div>
              <img
                src="https://assets-global.website-files.com/61711827199c39768e329c82/61711827199c3941bb329cb1_27.svg"
                alt="icon"
              ></img>
              <h3>Streamline Communication</h3>
              <p>
                Send powerful push notifications to your users or encourage your
                congregation to connect through your small groups to drive
                weekly engagement.
              </p>
            </div>
            <div>
              <img
                src="	https://assets-global.website-files.com/61711827199c39768e329c82/61711827199c39e34c329caf_26.svg"
                alt="icon"
              ></img>
              <h3>Create Your Own Internal Social Feed</h3>
              <p>
                Your congregation can now post prayer requests, powerful
                testimonials or bible messages inside a social feed that is
                monitored by your church.
              </p>
            </div>
          </Section1IteamWrapper>
        </Section1Container>
        <Section2Container>
          <p style={{ fontWeight: "700" }}>
            We are making it our mission to provide every church with a plažorm
            that helps them connect with their members, outreach, and minister
            all on the go!
          </p>
          <Section2LogoWrapper>
            {BrandLogos.map((data, item) => (
              <div key={item} style={{ marginRight: "20px" }}>
                <img width="200px" src={data.img} alt="fsd"></img>
              </div>
            ))}
          </Section2LogoWrapper>
        </Section2Container>
        <Section3Container>
          <div>
            <div
              style={{
                maxWidth: "732px",
                width: "100%",
                marginTop: "30px",
                marginBottom: "60px",
              }}
            >
              <h1>Your App. Your Band.</h1>
              <p>
                Redefine online personal coaching with your own iOS & Android
                app and drive unparalleled client engagement.
              </p>
            </div>
            <Section3ItemContainer>
              {AppFeatures.map((data, index) => (
                <Section3Item>
                  <div style={{ flex: 1, maxWidth: "400px" }}>
                    <img width="100%" alt="img" src={data.img}></img>
                  </div>
                  <div style={{ flex: 1, padding: "0 7%" }}>
                    <h3> {data.title}</h3>
                    <p>{data.content}</p>
                    <Button style={{ backgroundColor: "#999999" }}>
                      Get Started
                    </Button>
                  </div>
                </Section3Item>
              ))}
            </Section3ItemContainer>
          </div>
        </Section3Container>
      </Main>
      {/* //Slider  */}
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1100px",
          background: "#f8f8f8",
          paddingBottom: "50px",
        }}
      >
        <Slider />
      </div>
      <Main>
        <Section4Container>
          <div
            style={{
              maxWidth: "732px",
              width: "100%",
              marginTop: "30px",
              marginBottom: "60px",
            }}
          >
            <h1>One App. Many Features</h1>
            <p>
              {" "}
              With so many features compacted into our platform, we couldn't
              list them all. We wanted to add some of the key features below for
              your reference.
            </p>
          </div>
          <Section4ContentWrapper
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ flex: 1 }}>
              <ul>
                {" "}
                {Features.map((item, index) => (
                  <li key={index}>
                    {
                      <span
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          color: "#ef8523",
                        }}
                      >
                        {item.icon}
                      </span>
                    }
                    {<span>{item.title}</span>}
                  </li>
                ))}
              </ul>
              <Button>Get Started</Button>
            </div>
            <div
              style={{
                flex: 1,
                background: "rgb(243 246 247)",
                padding: "30px",
                borderRadius: "30px",
              }}
            >
              <img
                width="100%"
                alt="img"
                src={process.env.PUBLIC_URL + "assets/images/img7.png"}
              ></img>
            </div>
          </Section4ContentWrapper>
        </Section4Container>
        {/* FAQ Section  */}
        <Section5Container>
          <div style={{}}>
            <h3> Frequently Asked Questions.</h3>
            <p>
              {" "}
              If you have any further questions, have a look below and feel free
              to get in touch with our team.
            </p>
          </div>
          <FaqList />
        </Section5Container>
      </Main>
      <Section6Container>
        <Section6Wrapper>
          <div style={{ flex: 1, padding: "0 10%" }}>
            <h1>
              {" "}
              Transform your clients' <br></br>transformation journey{" "}
            </h1>
            <p>
              Our trainers love how easy it is to create engaging fitness
              journeys with just a few clicks. Ready to join the mysundayfamily?
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button>Get Started</Button>
              <div style={{ fontSize: "14px" }}>
                No credit card required. Cancel Anytime
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "300px",
              padding: "4px",
              background: "#f18622",
              borderRadius: "10px",
            }}
          >
            <img
              width="100%"
              alt="img"
              style={{ borderRadius: "10px" }}
              src={process.env.PUBLIC_URL + "assets/images/img8.png"}
            ></img>
          </div>
        </Section6Wrapper>
      </Section6Container>
    </div>
  );
}

// Homepage Components
const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;
  @media screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;
const Button = styled.div`
  border-radius: 5px;
  padding: 10px 30px;
  background: #999999;
  max-width: 100px;
  text-align: center;
  color: #fff;
  margin: 10px 0;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
const Section1Container = styled.div`
  text-align: left;
  padding-bottom: 80px;
  padding-top: 100px;
  h1 {
    margin: 20px 0;
  }
  p {
    margin-bottom: 50px;
  }
`;
const Section1IteamWrapper = styled.div`
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  h3 {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 991px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const Section2Container = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 70px;

  p {
    color: black;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Section2LogoWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      margin-bottom: 15px;
    }
  }
`;
const Section3Container = styled.div`
  padding: 80px 0;
  text-align: left;
  h1 {
    margin: 20px 0;
  }
  p {
    margin-bottom: 50px;
  }
`;
const Section3ItemContainer = styled.div``;
const Section3Item = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  text-align: left;
  margin: 50px 0;
  :nth-child(even) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px;
    div {
      margin: 10px 0;
    }
    :nth-child(even) {
      flex-direction: column-reverse;
    }
  }

  h3 {
    margin: 0.67em 0;
    font-size: 30px;
  }
  p {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 991px) {
    h3 {
      font-size: 24px;
    }
  }
`;

const Section4Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0.67em 0;
  }
  p {
    padding-bottom: 10px;
  }
  ul {
    list-style: none;
    li {
      text-align: left;
      margin: 18px 0;
      display: flex;
      align-items: center;
    }
  }
`;
const Section4ContentWrapper = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      margin-bottom: 10px;
    }
  }
`;
const Section5Container = styled.div`
  text-align: center;
  h3 {
    margin: 0.67em 0;
    font-size: 30px;
  }
  p {
    padding-bottom: 10px;
  }
`;
const Section6Container = styled.div`
  padding: 50px 0;
`;
const Section6Wrapper = styled.div`
  max-width: 968px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    margin: 20px 0;
  }

  p {
    margin: 20px 0;
  }
`;
//Hero Section Styling and Component
const HeroSection = () => (
  <>
    <HeroSectionWrapper
      imgURL={process.env.PUBLIC_URL + "assets/images/hero-bg.png"}
    >
      <HeroSectionContainer>
        <HeroSectionLeftWrapper>
          <h1>
            Changing the Way Your <span>Chruch Connects</span>
          </h1>
          <p>
            C Applications are available through Google Play either free of
            charge or at a cost. They can be downloaded directly on an Android
            device through the proprietary Google Play Store mobile app or by
            deploying the application to a device from the Google Play website.
          </p>
          <HeroSectionButtonWrapper>
            <HeroSectionButton>Get Started</HeroSectionButton>
            <HeroSectionButton style={{ backgroundColor: "#999999" }}>
              Become An Investor
            </HeroSectionButton>
          </HeroSectionButtonWrapper>
          <p>Be a part of our early access program</p>
        </HeroSectionLeftWrapper>
        <HeroSectionRightWrapper>
          <div style={{ maxWidth: "540px" }}>
            <img
              src="https://assets-global.website-files.com/61711827199c39768e329c82/6176d60b889da5c05be389f1_hero-phone.png"
              alt="imag"
              width="100%"
            ></img>
          </div>
        </HeroSectionRightWrapper>
      </HeroSectionContainer>
    </HeroSectionWrapper>
  </>
);

const HeroSectionWrapper = styled.div`
  background-image: url("https://assets-global.website-files.com/61711827199c39768e329c82/6176903cd355d94bcdf0b997_background%2010.jpg");
  background-position: 0 0;
  background-size: cover;
  padding: 90px 0;
`;
const HeroSectionContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const HeroSectionLeftWrapper = styled.div`
  text-align: left;
  flex: 1;
  p {
    line-height: 1.5;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  h1 {
    margin: 20px 0;
    font-size: 60px;
    span {
      color: #f28522;
    }
  }
`;
const HeroSectionRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const HeroSectionButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const HeroSectionButton = styled.div`
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #f28522;
  margin-right: 15px;
  max-width: 150px;
  text-align: center;
  width: 100%;
  color: #fff;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Features = [
  {
    icon: <TiGroup />,
    title: "Custom Notes",
  },
  {
    icon: <BiDumbbell />,
    title: "Payer Request",
  },
  {
    icon: <IoVideocamOutline />,
    title: "Embed Your Giving Platform",
  },
  {
    icon: "ds",
    title: "No Data Content Restrictions",
  },
  {
    icon: <HiOutlineColorSwatch />,
    title: "Church Finder",
  },
  {
    icon: <IoChatbubbleEllipsesOutline />,
    title: "Boost/Advertise Your Church Content",
  },
  {
    icon: <BiCalendar />,
    title: "Data Analytics & Insights",
  },
  {
    icon: <IoIosNotifications />,
    title: "Web Admin Portal",
  },
  {
    icon: <VscGraphLine />,
    title: "Brand & Customization",
  },
  {
    icon: <BiCheckCircle />,
    title: "Check-ins (coming soon)",
  },
  {
    icon: <AiOutlineFileText />,
    title: "Custom Forms (coming soon)",
  },
];

const AppFeatures = [
  {
    title: "Custom Social Feed",
    content:
      "Your congregation can now post prayer requests, powerful testimonials, or daily encouragements inside of your church's social feed. Give your members a healthy and enriched social platform 100% monitored by your church..",
    img: process.env.PUBLIC_URL + "assets/images/img1.png",
  },
  {
    title: "Audio & Video",
    content:
      "Showcase your success stories ayour clients' transformation journeys with before and after photos, client testimonials and more.",
    img: process.env.PUBLIC_URL + "assets/images/img2.png",
  },
  {
    title: "Small Groups",
    content:
      "Organize and communicate with small groups from your church. Give your users access to join publicly or privately any group your setup to drive weekly and long-lasting church communication.",
    img: process.env.PUBLIC_URL + "assets/images/img3.png",
  },
  {
    title: "Conference Calls",
    content:
      "Host your own live conference audio inside the app. Manage prayer calls and church audio worry free of a dial-in or toll number. Enable multiple hosts to talk and designate your community with a secure, trusted audio line.",
    img: process.env.PUBLIC_URL + "assets/images/img4.png",
  },
  {
    title: "Events",
    content:
      "Increase your church's awareness of the many events and gatherings your church or small groups are hosting. Share your event details like pricing, contact information, signup links and more.",
    img: process.env.PUBLIC_URL + "assets/images/img5.png",
  },
  {
    title: "In-App Messaging",
    content:
      "No more emails! Whether it's a direct message or group message, allow your congregation to send messages to your church or to each other in real-time with no additional information required.",
    img: process.env.PUBLIC_URL + "assets/images/img6.png",
  },
];

const BrandLogos = [
  {
    img: process.env.PUBLIC_URL + "assets/images/b1.png",
  },
  {
    img: process.env.PUBLIC_URL + "assets/images/b2.png",
  },
  {
    img: process.env.PUBLIC_URL + "assets/images/b3.png",
  },
  {
    img: process.env.PUBLIC_URL + "assets/images/b4.png",
  },
];
export default HomePage;
