import React, {useEffect, useState} from "react";
import slider1 from "../assets/images/image_review1.png";
import slider2 from "../assets/images/image_review2.png";
import slider3 from "../assets/images/image_review3.png"
import "react-alice-carousel/lib/alice-carousel.css";

// @ts-ignore
import Whirligig from 'react-whirligig'
import CarouselItem from "@/common/compoments/CarouselItem";

export const dataSlider = [
  {
    img: slider1,
    title: "Startverse",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  },
  {
    img: slider2,
    title: "Dragon Warrior",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  },
  {
    img: slider3,
    title: "Fit the Fat",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  },
  {
    img: slider1,
    title: "Startverse",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  },
  {
    img: slider2,
    title: "Dragon Warrior",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  },
  {
    img: slider3,
    title: "Fit the Fat",
    description: "STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the world to build their dream life, dream companies, meet their dream couple, hire friends to work for them, and earn real money."
  }
]

const Slider: React.FunctionComponent = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile,setIsMobile] = useState(false)
  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth > 976) {
      setVisibleSlides(3)
    } else if (976 > window.innerWidth && window.innerWidth > 578) {
      setVisibleSlides(1);
      setIsMobile(true)
    } else {
      setIsMobile(true)
      setVisibleSlides(1)
    }
  }, [])

  let whirligig: any
  const next = () => {
    whirligig.next();
    if (slideIndex < dataSlider.length -3) {
      setSlideIndex(slideIndex + 1)
    }
  }
  const prev = () => {
    whirligig.prev();
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    }
  }
  console.log(slideIndex);

  return (
    <div style={{position: "relative"}}>
      <i
        className="fa-solid fa-caret-left btn-prev"
        onClick={prev}
        style={{fontSize: "38px", color: "#FFFFFF", cursor: "pointer", zIndex: 10}}
      />
      <Whirligig
        style={{overflow: "hidden"}}
        visibleSlides={visibleSlides}
        className={"slider-whir"}
        gutter="2em"
        slideBy={1}
        slideTo={slideIndex}
        slideClass={"slider-item"}
        ref={(_whirligigInstance: any) => {
          whirligig = _whirligigInstance
        }}
      >
        {dataSlider.map((item,index) => {
          return (
            <CarouselItem
              isMobile={isMobile}
              key={item.title}
              index={index}
              item={item}
              slideIndex={slideIndex}
            />
          )
        })}
      </Whirligig>
      <i className="fa-solid fa-caret-right btn-next" onClick={next}
         style={{fontSize: "38px", color: "#FFFFFF", cursor: "pointer", zIndex: 100}}/>
    </div>
  )
}
export default Slider