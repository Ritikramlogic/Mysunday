import React from "react";
import styled from "styled-components";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderCard from "./SliderCard";

function Slider() {
  return (
    <SliderWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{ width: "100%", height: "100%" }}
      >
        {FeedbackData.map((data, item) => (
          <SwiperSlide>
            <SliderCard data={data} key={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div``;
const FeedbackData = [
  {
    title: "Churches Love MySunday",
    content:
      "FitBudd has been amazing and my clients love it. It made my life so much easier. It's given me more time to focus on what my clients need and make them the perfect program.",
    name: "Georgia Grant",
    location: "G’s Health & Fitness, UK",
    img: "https://assets-global.website-files.com/61713dc07218ee71af5413af/61768e0637aa9c6b18f93647_Georgia%20Grant.jpg",
  },
  {
    title: "Churches Love MySunday",
    content:
      "FitBudd has been amazing and my clients love it. It made my life so much easier. It's given me more time to focus on what my clients need and make them the perfect program.",
    name: "Georgia Grant",
    location: "G’s Health & Fitness, UK",
    img: "https://assets-global.website-files.com/61713dc07218ee71af5413af/61768db9b82f669fec3711c2_pelegrina%20dora.jpg",
  },
  {
    title: "Churches Love MySunday",
    content:
      "FitBudd has been amazing and my clients love it. It made my life so much easier. It's given me more time to focus on what my clients need and make them the perfect program.",
    name: "Georgia Grant",
    location: "G’s Health & Fitness, UK",
    img: "https://assets-global.website-files.com/61713dc07218ee71af5413af/61768e0637aa9c6b18f93647_Georgia%20Grant.jpg",
  },
  {
    title: "Churches Love MySunday",
    content:
      "FitBudd has been amazing and my clients love it. It made my life so much easier. It's given me more time to focus on what my clients need and make them the perfect program.",
    name: "Georgia Grant",
    location: "G’s Health & Fitness, UK",
    img: "https://assets-global.website-files.com/61713dc07218ee71af5413af/61768daa60ab58aec7a8fe67_absolute%20fitness.jpg",
  },
  {
    title: "Churches Love MySunday",
    content:
      "FitBudd has been amazing and my clients love it. It made my life so much easier. It's given me more time to focus on what my clients need and make them the perfect program.",
    name: "Georgia Grant",
    location: "G’s Health & Fitness, UK",
    img: "https://assets-global.website-files.com/61713dc07218ee71af5413af/61768db9b82f669fec3711c2_pelegrina%20dora.jpg",
  },
];
export default Slider;
