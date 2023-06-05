import React from "react";
import s from "../Components//Portfolio/d_portfolio.module.css";
import Card from "../Components/Portfolio/Card";
import Header3 from "../layout/header-3";
import p from './port.module.css';
import About from './blank';
import AboutUs_3 from "./about";
import Footer3 from "../layout/footer-3";
import Link from "next/link";

const buttons = [
  "All Product",
  "Wordpress",
  "Html",
  "Dashboard",
  "React",
  "Laravel",
  "Angular",
  "Mobile App",
  "All Product",
  "Wordpress",
  "Html"
];

const D_Portfolio = ({ hidden }) => {
  hidden ? hidden : hidden = false
  return (
    <>
      <Header3 />
      <div
        className="dlab-bnr-inr style-1 bg-primary"
        style={{
          backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
        }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            {/* <h1>Dadhich Technologies</h1> */}
            <h1>Portfolio</h1>
            {/* <!-- Breadcrumb Row --> */}
            <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
              {/* <ul className="breadcrumb my-3">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ul> */}
            </nav>
            {/* <!-- Breadcrumb Row End --> */}
          </div>
        </div>
      </div>
      <div className={s.d_portfolio}>
        <div className={s.d_heading}>
          {/* <span>Our Creative Work</span> */}
          <h1 className={p.yes}>Portfolio</h1>
          {/* <span>
          Now, We show you our some latest and finest projects of our company.
          These all peerless projects boom in online marketing with highly rated
          features. Let's see these outstanding projects.
        </span> */}
          {
            !hidden ?
              <div className={`${s.filter_button} container`}>
                {buttons.map((name) => (
                  <button id={name}>{name}</button>
                ))}
              </div>
              : <></>

          }
          <div className={s.portfolio}>
            <div className={`${s.card_container}`}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              {/* <Link href="/about"><a><Card/></a></Link> */}

            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default D_Portfolio;
