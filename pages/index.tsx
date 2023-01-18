import Image from 'next/image'
import GooglePlayImage from "../common/assets/images/google-play.png"
import AppstoreImg from "../common/assets/images/appstore.png";
import BannerSlider from "../common/compoments/BannerSlider";
import sc1 from "../common/assets/images/toppng.webp";
import Word2 from "../common/assets/images/work2.png";
import Word3 from "../common/assets/images/work3.png";
import info1 from "../common/assets/images/icon enterprise.png";
import info2 from "../common/assets/images/info2.webp";
import info3 from "../common/assets/images/info3.webp";
import info4 from "../common/assets/images/info4.webp";
import info5 from "../common/assets/images/frame-work1.png";
import info6 from "../common/assets/images/fk2.png";
import info7 from "../common/assets/images/fw3.png";
import info8 from "../common/assets/images/fw4.png";
import reactNative from "../common/assets/images/fram-work/react.png"
import swift from "../common/assets/images/fram-work/Ner.png"
import android from "../common/assets/images/fram-work/android.png";
import flutter from "../common/assets/images/fram-work/flutter.png";
import unity from "../common/assets/images/fram-work/unity.png"
import java from "../common/assets/images/fram-work/java.png";
import vue from "../common/assets/images/fram-work/vuejs.png";
import reactjs from "../common/assets/images/fram-work/reactjs.png";
import nodejs from "../common/assets/images/fram-work/nodejs.png";
import php from "../common/assets/images/fram-work/php.png";
import figma from "../common/assets/images/fram-work/figma.png";
import ae from "../common/assets/images/fram-work/ae.png";
import ai from "../common/assets/images/fram-work/ai.png";
import ps from "../common/assets/images/fram-work/ps.png";
import xd from "../common/assets/images/fram-work/xd.png";
import gameDesign from "../common/assets/images/bg33.png";
// @ts-ignore
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import {useEffect, useState} from "react";
import Slider from "@/common/compoments/Slider";

export default function Home() {
  const [heightDesignBox, setHeightDesignBox] = useState(0);

  useEffect(() => {
    const heightControl: any = document.querySelector('#design-img');
    setHeightDesignBox(heightControl.offsetHeight - 15)
    console.log("g", heightControl.offsetHeight)
  }, []);

  useEffect(() => {
    (async () => {
      new WOW.WOW().init();
    })()
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="h-100">
          <div className="wow animate__animated animate__fadeIn main-content-banner m-auto">
            <h1 className="banner-title ">Make to Be Played</h1>
            <h4 className="intro-desc">The Very Best in Metaverse Gaming</h4>
            <div className="mt-5">
              <a href="">
                <Image className="google-play mb-2" src={GooglePlayImage} alt=""/>
              </a><br/>
              <a className="mb-2" href="">
                <Image className="appstore" src={AppstoreImg} alt=""/>
              </a>
            </div>
          </div>
          <div className={"slick_slider"}>
            <Slider/>
          </div>
        </div>
      </div>
      <div className={"main-content-banner py-5"}>
        <div className={" text-center section-1"}>
          <div className={"wow animate__animated animate__fadeInUp"}>
            <h3 className="intro-desc text-center mb-0">About Unicorn</h3>
            <h2 className="title-title text-center mt-3">Become Word-class <br/> Game Studio</h2>
            <p className={"text-center mt-3 mb-0"}>
              Established in 2020, our vision is to become a world-class game studio,<br/>
              creating world-class games with stunning visual and addictive gameplay.<br/>
              We hope you could be a part of our unbelievable journey.
            </p>
            <div className={"d-flex justify-content-center"} style={{position: "relative"}}>
              <a href={""} className={"btn-group"}>
                <button className={"btn-learn-more mt-4"}></button>
                <span className={"learn-more-text"}>Learn more</span>
              </a>
            </div>
          </div>
          <div className="grid-box wow animate__animated animate__fadeInLeft">
            <div className={"product_box_software p-3"}>
              <h2 className="title-title text-center ">Software <br/>Development</h2>
              <div className={"mt-4"}>
                <div>Product development</div>
                <div>Outsourcing project</div>
                <div>Advise IT system</div>
              </div>
              <Image className={"sc-1-img"} src={sc1} alt={""}/>
            </div>
            <div className={"product_box_human  p-3"}>
              <h2 className="title-title text-center ">Human Resource <br/> Development</h2>
              <div className={"mt-4"}>
                <div>Product development</div>
                <div>Outsourcing project</div>
                <div>Advise IT system</div>
              </div>
              <Image className={"sc-1-img"} src={Word2} alt={""}/>
            </div>
            <div className={"product_box_solution    p-3"}>
              <h2 className="title-title text-center ">Enterprise <br/>Solution</h2>
              <div className={"mt-4"}>
                <div>Product development</div>
                <div>Outsourcing project</div>
                <div>Advise IT system</div>
              </div>
              <Image className={"sc-1-img"} src={Word3} alt={""}/>
            </div>
          </div>
        </div>

        <div className={"section"}>
          <h1 className={"title-title text-center"}>Provide <span style={{color: "#fe954f"}}>Solution Service</span>
          </h1>
          <div className={"gird-provide mt-5"}>
            <div className={"wow animate__animated animate__fadeInLeft p-3"}>
              <div className={"title-title text-center STT"}>01</div>
              <h4 className={"title-title text-center"}>Web Application</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info1} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInUpBig"} style={{marginTop: "3.5rem"}}>
              <div className={"title-title text-center STT"}>02</div>
              <h4 className={"title-title text-center"}>Mobile Application</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info2} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={" p-3 wow animate__animated animate__fadeInUpBig"}>
              <div className={"title-title text-center STT"}>03</div>
              <h4 className={"title-title text-center"}>E-learning</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info3} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInDownBig"} style={{marginTop: "3.5rem"}}>
              <div className={"title-title text-center STT"}>04</div>
              <h4 className={"title-title text-center"}>E-commerce</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info4} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInLeft"}>
              <div className={"title-title text-center STT"}>05</div>
              <h4 className={"title-title text-center"}>HR System</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info5} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInUpBig"} style={{marginTop: "3.5rem"}}>
              <div className={"title-title text-center STT"}>06</div>
              <h4 className={"title-title text-center"}>Sharing Economy</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info6} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInUpBig"}>
              <div className={"title-title text-center STT"}>07</div>
              <h4 className={"title-title text-center"}>Sales Management <br/> System</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info7} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={"p-3 wow animate__animated animate__fadeInDownBig"} style={{marginTop: "3.5rem"}}>
              <div className={"title-title text-center STT"}>08</div>
              <h4 className={"title-title text-center"}>Video Streaming</h4>
              <div className={"p-3 text-center"}>
                <Image className={"info-image mt-5"} src={info8} alt=""/>
              </div>
              <p className={"mt-5 info-desc"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className={"section"}>
          <h1 className={"title-title text-center"}>Applied <span style={{color: "#fe954f"}}>Technology</span></h1>
          <div className="grid-box mt-5">
            <div className={"app-box wow animate__animated animate__fadeIn"}>
              <h1 className="title-title ">App <br/>Development</h1>
              <div className={"mt-5"}>
                <div className={"mb-4"}><Image height={20} src={reactNative} alt={""}/></div>
                <div className={"mb-4"}><Image height={20} src={swift} alt={""}/></div>
                <div className={"mb-4"}><Image height={25} src={flutter} alt={""}/></div>
                <div className={"mb-4"}><Image height={15} src={android} alt={""}/></div>
                <div className={"mb-4"}><Image height={25} src={unity} alt={""}/></div>
              </div>
            </div>
            <div className={"web-box wow animate__animated animate__fadeIn p-4"}>
              <h2 className="title-title  ">Web <br/> Development</h2>
              <div className={"mt-5"}>
                <div className={"mb-4"}><Image height={35} src={java} alt={""}/></div>
                <div className={"mb-4"}><Image height={20} src={vue} alt={""}/></div>
                <div className={"mb-4"}><Image height={40} src={reactjs} alt={""}/></div>
                <div className={"mb-4"}><Image height={25} src={nodejs} alt={""}/></div>
                <div className={"mb-4"}><Image height={20} src={php} alt={""}/></div>
              </div>
            </div>
            <div className={"design-box wow animate__animated animate__fadeIn p-4"}>
              <h2 className="title-title  ">Design <br/>Creative</h2>
              <div className={"mt-5"}>
                <div className={"mb-4"}><Image height={30} src={figma} alt={""}/></div>
                <div className={"mb-4"}><Image height={30} src={ae} alt={""}/></div>
                <div className={"mb-4"}><Image height={30} src={ai} alt={""}/></div>
                <div className={"mb-4"}><Image height={30} src={ps} alt={""}/></div>
                <div className={"mb-4"}><Image height={30} src={xd} alt={""}/></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={"row gy-2"}>
            <div className="col-xl-7 col-12">
              <div style={{position: "relative"}}>
                <Image id={"design-img"} className={"w-100"} style={{height: "auto"}} src={gameDesign} alt={""}/>
                <div className={"container w-75 mobile-none"} style={{position: "absolute", zIndex: 10, bottom: "5px"}}>
                  <h1 className={"title-title training"} style={{color: "#b2ffec"}}>HR training and development are
                    prioritized</h1>
                  <h5 className={"title-title"}>Unicorn Launching Center (UNC)</h5>
                  <p className={"title-title training_desc"} style={{color: "#bdbdbd"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-12 col-12">
              <div className="row">
                <div className="col-xl-12 col-md-6">
                  <div style={{height: heightDesignBox / 2}} className={"img-colum-1 mb-3"}>
                    <div className="container">
                      <h1
                        className={"title-title training"}
                        style={{color: "#ffe58c", position: "absolute", bottom: "10px"}}>
                        Develop professional skills
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div style={{height: heightDesignBox / 2}} className={"img-colum-2"}>
                    <div className={"container"}>
                      <h1
                        className={"title-title training"}
                        style={{color: "#aaffae", position: "absolute", bottom: "10px"}}
                      >
                        Cultural training Unicron
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"section wow animate__animated animate__fadeInUp"}>
          <h4 className={"title-title text-center"}>150 + Project</h4>
          <h1 style={{color: "#fe954f"}} className={"title-title text-center"}>
            Projects In Various Fields
          </h1>
          <div className={"d-flex justify-content-center mt-4"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore
              et
              dolore magna aliqua. Ut enim ad minim veniam, quis <br/> nostrud exercitation ullamco laboris nisi ut
              aliquip ex
              ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu <br/> fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in <br/> culpa qui officia deserunt
              mollit
              anim id est laborum.
            </p>
          </div>
          <div className={"d-flex justify-content-center"} style={{position: "relative"}}>
            <div className={"btn-group"}>
              <button className={"btn-see-more mt-4"}>
              </button>
              <span className={"see-more-text"}>See more projects</span>
            </div>
          </div>
        </div>

        <div className={"section"}>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-md-10 col-12">
              <div className={"subscribe"}>
                <div className="row gy-3">
                  <div className="col-xl-4 col-12">
                    <h1 className={"title-title mb-0"}>Our <span style={{color: "#fe954f"}}>Newsletter</span></h1>
                  </div>
                  <div className="col-xl-6 col-12 d-flex align-items-center">
                    <input
                      className={"w-100 input-sub"}
                      placeholder={"Enter Your Email....."}
                      type="text"
                    />
                  </div>
                  <div className="col-xl-2 col-md-6 d-flex align-items-center">
                    <button className={"btn-subscribe"}>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
