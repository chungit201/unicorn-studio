import React, {useState} from "react";
import slider1 from "../assets/images/image_review1.png";
import slider2 from "../assets/images/image_review2.png";
import slider3 from "../assets/images/image_review3.png"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import Image from "next/image";
import frame_inactive from "@/common/assets/images/vien.png";

const items = [
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider1}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider2}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider3}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider1}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider2}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
  <div key={1} style={{position:"relative"}}>
    <Image  className="item w-100" alt={""} style={{height: "auto"}} src={slider3}/>
    <div style={{position: "absolute", top: "-6px"}}>
      <Image style={{width: "100%"}} src={frame_inactive} alt={""}/>
    </div>
  </div>,
];
const thumbItems = (items: any, [setThumbIndex, setThumbAnimation]: any) => {
  return items.map((item: any, i: number) => (
    <div key={i} className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      {item}
    </div>
  ));
};

const Slider: React.FunctionComponent = () => {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex]));
  const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
  };


  const slideNext = () => {
    if (thumbIndex < thumbs.length - 1) {
      setThumbIndex(thumbIndex + 1);
    }
  };
  console.log(thumbIndex)
  const slidePrev = () => {
    if (thumbIndex > 0) {
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item);
  };
  return (
    <div style={{position:"relative"}}>
      <AliceCarousel
        activeIndex={thumbIndex}
        items={items}
        responsive={responsive}
        disableDotsControls={true}
        disableButtonsControls={true}
        onSlideChanged={syncThumbs}
      />
      <i className="fa-solid fa-caret-left btn-prev" onClick={slidePrev} style={{fontSize: "38px", color: "#FFFFFF"}}/>
      <i className="fa-solid fa-caret-right btn-next" onClick={slideNext} style={{fontSize: "38px", color: "#FFFFFF"}}/>

    </div>
  )
}
export default Slider