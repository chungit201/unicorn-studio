import React from "react";
import discord from "../assets/images/social/discord.png";
import telegram from "../assets/images/social/Telegram_logo.png";
import facebook from "../assets/images/social/Facebook_f_logo_(2019).png";
import youtube from "../assets/images/social/youtube-logo-icon-transparent---32.png";
import twitter from "../assets/images/social/twiter.png";
import inImg from "../assets/images/social/in.png";
import btnChPlay from "../assets/images/btn-ch-play.png";
import btnAppstore from "../assets/images/appstore-btn.png";
import LogoSmall from "../assets/images/logo-small.png"
import Image from "next/image";
import Link from "next/link";

const Footer: React.FunctionComponent = () => {
  return (
    <div className={"footer"}>
      <div className="container">
        <div className="row gx-xl-5 gx-md-5 gy-5">
          <div className="col-xl-4 col-md-6 col-12">
            <div className={""}>
              <h4 style={{fontWeight: 700}} className={"mb-3"}>Contact</h4>
              <ul>
                <li className={"mb-2"}><b>Email</b>:</li>
                <li className={"mb-2"}><b>Tel</b>:</li>
                <li className={"mb-2"}><b>Fax</b>:</li>
                <li className={"mb-2"}><b>Address</b>:</li>
                <li className={"mb-2"}><b>Singapore</b>:77 High Street #09-11 High Street Plaza Singapore</li>
                <li className={"mb-2"}><b>Hanoi</b>:Room 02, Floor 02 Luxury ParkView, 08 Pham Van Bach Street Cau Giay,
                  Hanoi
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-6">
            <div>
              <h4 style={{fontWeight: 700}} className={"mb-3"}>Navigation</h4>
              <ul>
                <li className={"mb-2"}>Games</li>
                <li className={"mb-2"}>Careers</li>
                <li className={"mb-2"}>About</li>
                <li className={"mb-2"}>Privacy Policy</li>
                <li className={"mb-2"}>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-6">
            <div>
              <h4 style={{fontWeight: 700}} className={"mb-3"}>Social</h4>
              <div className={"mt-4"}>
                <div>
                  <a href="" target={"_blank"}><Image src={discord} height={30} alt={""}/></a>
                  <a href="" target={"_blank"}> <Image className={"mx-3"} src={telegram} height={30} alt={""}/></a>
                  <a href="" target={"_blank"}> <Image src={facebook} height={30} alt={""}/></a>
                </div>
                <div className={"mt-4"}>
                  <a href="" target={"_blank"}><Image src={youtube} height={30} alt={""}/></a>
                  <a href="" target={"_blank"}> <Image className={"mx-3"} src={twitter} height={30} alt={""}/></a>
                  <a href="" target={"_blank"}> <Image src={inImg} height={30} alt={""}/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 col-12">
            <h4 style={{fontWeight: 700}} className={"mb-3"}>Fin Us On</h4>
            <div className={"fin-us-on"}>
              <div className={"mb-xl-3 download-app"}>
                <Link href={""} target={"_blank"} className={"mb-3"}>
                  <Image src={btnChPlay} style={{width: "100%", height: "auto"}} alt={""}/>
                </Link>
                <Link href={""} target={"_blank"} className={"mb-3"}>
                  <Image className={"mt-2 mb-xl-3"} src={btnAppstore} style={{width: "100%", height: "auto"}} alt={""}/>
                </Link>
              </div>
              <div className={"text-center w-100 d-flex justify-content-center "}>
                <Link href={"/"}>
                  <Image src={LogoSmall} height={90} alt={""}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-5"}>
          <div className={"line-footer"}></div>
        </div>
      </div>
    </div>
  )
}
export default Footer