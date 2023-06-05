import React from "react";
import Header3 from "../layout/header-3";
import Link from "next/link";
import Features3 from "../element/our-features-3";
import D_Portfolio from "../Components/Portfolio/D_Portfolio.js";
import Process from "../Components/Process/Process";
import Footer3 from "../layout/footer-3";
import D_Features from "../Components/D_Features/D_Features";
import FAQ3 from "./faq";
import GetInTouch3 from "../element/get-in-touch";

const business = () => {
  return (
    <>
      <div className="business_section">
        <Header3 />
        <div className="heading">
          <h1 className="main_heading">
            Unlock Your Ecommerce Success with a Stunning Online Presence
          </h1>
          <p className="para">
            Open the doors to ecommerce success. Our digital agency creates
            stunning online experiences that captivate customers and drive
            tangible results.
          </p>
          <div>
            <Link href="#contact">
              <a
                data-wow-delay="2s"
                data-wow-duration="3s"
                className="wow fadeInUp business_btn btn btn-corner gradient btn-primary"
              >
                <div className="fa fa-user"></div>
                <span>Hire Us</span>
              </a>
            </Link>
            <Link href="https://wa.me/+918696219723">
              <a
                data-wow-delay="2s"
                data-wow-duration="3s"
                className="wow fadeInUp business_btn business_btn--outline  btn btn-corner gradient btn-primary"
              >
                <div className="fa fa-whatsapp"></div>

                WHATSAPP
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Features3 />
      <D_Portfolio hidden={true} category='ecom'></D_Portfolio>
      <Process/>
      <D_Features/>
      <FAQ3/>
      <GetInTouch3 />
      
      <Footer3/>
    </>
  );
};

export default business;
