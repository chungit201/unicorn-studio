import React from "react";
import Image from "next/image";
import frame_inactive from "@/common/assets/images/vien.png";
import frame_active from "@/common/assets/images/vien2.png";

interface CarouselProps {
  item: any,
  index: number,
  slideIndex: number
}

const CarouselItem: React.FunctionComponent<CarouselProps> = ({item, index, slideIndex}) => {
  return (
    <div style={{position: "relative"}}>
      <Image className={"w-100"} style={{height: "40%"}} alt={""} src={item.img}/>
      <Image className={"frame_inactive"} src={index === slideIndex + 1 ? frame_active : frame_inactive} alt={""}/>
      <div className={"p-3 slider-desc"} style={{position: 'absolute', bottom: 0}}>
        <h2 className={"title-title"}>{item.title}</h2>
        <p className={"mb-0"}>{item.description}</p>
      </div>
    </div>
  )
}

export default CarouselItem