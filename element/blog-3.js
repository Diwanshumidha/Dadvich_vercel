import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog3() {
  const [blogs, setblogs] = useState([]);
  const getblogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/blogs/getblogs"
      );
      setblogs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getblogs();
  }, []);

  return (
    <>
      {/* <!-- Blog --> */}
      <section className="content-inner " id="blog">
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">Our Blog & News</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row">


			{blogs.slice(0, 4).map((item)=>
				<Blog_card
				link_para={item.link_para}
				para={item.para}
				createdAt={new Date(item.createdAt).toDateString()}
				></Blog_card>
			)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog3;

const Blog_card = ({ link_para, para, createdAt }) => {
  return (
    <div
      className="col-xl-6 wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay="0.8s"
    >
      <div className="dlab-blog blog-half m-b30">
        <div className="dlab-media">
          <img src="images/blog/default/thum4.jpg" alt="" />
        </div>
        <div className="dlab-info">
          <h5 className="dlab-title">
            <Link href="/blog-details-3">
              <a>{link_para}</a>
            </Link>
          </h5>
          <p>{para}</p>
          <div className="dlab-meta">
            <ul>
              <li className="post-date">
                <i className="flaticon-clock m-r10"></i>
                {createdAt}
              </li>
              <li className="post-comment">
                <a href="#">
                  <i className="flaticon-speech-bubble"></i>
                  <span>15</span>
                </a>
              </li>
              <li className="post-share">
                <i className="flaticon-share"></i>
                <ul>
                  <li>
                    <a className="fa fa-facebook" href="#"></a>
                  </li>
                  <li>
                    <a className="fa fa-twitter" href="#"></a>
                  </li>
                  <li>
                    <a className="fa fa-linkedin" href="#"></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
