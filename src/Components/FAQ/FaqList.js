import React from "react";
import Faq from "./Faq";

export default function FaqList() {
  return (
    <div>
      {FaqData.map((faq, index) => (
        <Faq key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
}
const FaqData = [
  {
    title: "What is MySunday",
    content:
      "MySunday is a mobile app experience designed to connect your congregation throughout the week!",
  },
  {
    title: "Why this is Platform Free?",
    content:
      "MySunday is a mobile app experience designed to connect your congregation throughout the week!",
  },
  {
    title: "What is MySunday",
    content:
      "MySunday is a mobile app experience designed to connect your congregation throughout the week!",
  },
];
