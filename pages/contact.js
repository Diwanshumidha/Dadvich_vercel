import Link from "next/link";
import Quote3 from "../element/quote-3";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import GetInTouch3 from "../element/get-in-touch";

function ContactUs1() {
  return (
    <>
      <Header3 />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Contact Us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">
                      <a >Contact Us </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Get A Quote --> */}
        {/* <Quote3/> */}
        <GetInTouch3 />

      </div>
      <Footer3 />
    </>
  );
}

export default ContactUs1;
