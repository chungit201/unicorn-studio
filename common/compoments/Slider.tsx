import React, {useState} from "react";
import slider1 from "../assets/images/image_review1.png";
import slider2 from "../assets/images/image_review2.png";
import slider3 from "../assets/images/image_review3.png"
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import frame_inactive from "@/common/assets/images/vien.png";
import frame_active from "@/common/assets/images/vien2.png";
// @ts-ignore
import Whirligig from 'react-whirligig'


const Slider: React.FunctionComponent = () => {
  let whirligig: any
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()
  return (
    <div style={{position: "relative"}}>
      <i className="fa-solid fa-caret-left btn-prev" onClick={prev}
         style={{fontSize: "38px", color: "#FFFFFF", cursor: "pointer", zIndex: 10}}/>
      <Whirligig
        style={{overflow: "hidden"}}
        visibleSlides={3}
        className={"slider-whir"}
        gutter="2em"
        ref={(_whirligigInstance: any) => {
          whirligig = _whirligigInstance
        }}
      >
        <div style={{position: "relative"}}>
          <Image className={"w-100"} style={{height: "auto"}} alt={""} src={slider1}/>
          <Image className={"frame_inactive"} src={frame_inactive} alt={""}/>
          <div className={"p-3 slider-desc"} style={{position:'absolute',bottom:0}}>
            <h2 className={"title-title"}>Startverse</h2>
            <p className={"mb-0"}>STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the
              world to build their dream life, dream companies, meet their dream couple, hire friends to work for them,
              and earn real money.</p>
          </div>
        </div>
        <div style={{position: "relative"}}>
          <Image className={"w-100"} style={{height: "auto"}} alt={""} src={slider2}/>
          <Image className={"frame_inactive"} src={frame_active} alt={""}/>
          <div className={"p-3 slider-desc"} style={{position:'absolute',bottom:0}}>
            <h2 className={"title-title"}>Dragon Warrior</h2>
            <p className={"mb-0"}>STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the
              world to build their dream life, dream companies, meet their dream couple, hire friends to work for them,
              and earn real money.</p>
          </div>
        </div>
        <div style={{position: "relative"}}>
          <Image className={"w-100"} style={{height: "auto"}} alt={""} src={slider3}/>
          <Image className={"frame_inactive"} src={frame_inactive} alt={""}/>
          <div className={"p-3 slider-desc"} style={{position:'absolute',bottom:0}}>
            <h2 className={"title-title"}>Fit the Fat</h2>
            <p className={"mb-0"}>STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the
              world to build their dream life, dream companies, meet their dream couple, hire friends to work for them,
              and earn real money.</p>
          </div>
        </div>
        <div style={{position: "relative"}}>
          <Image className={"w-100"} style={{height: "auto"}} alt={""} src={slider3}/>
          <Image className={"frame_inactive"} src={frame_inactive} alt={""}/>
          <div className={"p-3 slider-desc"} style={{position:'absolute',bottom:0}}>
            <h2 className={"title-title"}>Fit the Fat</h2>
            <p className={"mb-0"}>STARTVERSE is a metaverse for everyone, who wants to build their own startups. Players join into the
              world to build their dream life, dream companies, meet their dream couple, hire friends to work for them,
              and earn real money.</p>
          </div>
        </div>
      </Whirligig>
      <i className="fa-solid fa-caret-right btn-next" onClick={next}
         style={{fontSize: "38px", color: "#FFFFFF", cursor: "pointer", zIndex: 100}}/>
    </div>
  )
}
export default Slider