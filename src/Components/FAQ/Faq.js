import React, { useEffect } from "react";
import styled from "styled-components";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import "./faq.css";
function Faq(props) {
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  });
  return (
    <>
      <FaqWrapper>
        <div
          class="accordion"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>{props.title}</div>
          <div style={{ display: "flex", fontSize: "30px" }}>
            <HiOutlineChevronUp />
          </div>
        </div>
        <FaqPanel class="panel">
          <p>{props.content}</p>
        </FaqPanel>
      </FaqWrapper>
    </>
  );
}

const FaqWrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  margin: 30px 0;
  padding: 25px 30px;
  font-size: 1rem;
  font-weight: bold;
`;
const FaqPanel = styled.div`
  padding: 18px 0;
  display: none;
  overflow: hidden;
  text-align: left;
  font-weight: 400;
`;

export default Faq;
