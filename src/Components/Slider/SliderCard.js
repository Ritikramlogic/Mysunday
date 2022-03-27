import React from "react";
import styled from "styled-components";
function SliderCard(props) {
  return (
    <SliderWrapper>
      <SliderCardTitle>
        <h1>{props.data.title}</h1>
      </SliderCardTitle>
      <SliderCardDescriptionWrapper>
        <SliderCardImageWrapper>
          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            alt="img"
            src={props.data.img}
          ></img>
        </SliderCardImageWrapper>
        <SliderCardContentContainer>
          <SliderCardDoubaleQuates
            src={process.env.PUBLIC_URL + "/assets/quates.svg"}
          ></SliderCardDoubaleQuates>
          <SliderCardContent>{props.data.content}</SliderCardContent>
          <SliderCardUserDetails>
            <h3>{props.data.name}</h3>
            <p>{props.data.location}</p>
          </SliderCardUserDetails>
        </SliderCardContentContainer>
      </SliderCardDescriptionWrapper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  @media screen and (max-width: 767px) {
    padding: 0 30px;
  }
`;
const SliderCardTitle = styled.div`
  color: #000;
  margin: 0.67em 0;
  padding-bottom: 25px;
`;
const SliderCardImageWrapper = styled.div`
  max-width: 400px;
`;
const SliderCardDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const SliderCardContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 20px;
  margin-left: 6%;
  @media screen and (max-width: 767px) {
    padding: 30px 0;
  }
`;
const SliderCardDoubaleQuates = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;
const SliderCardContent = styled.p``;
const SliderCardUserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SliderCard;
