import BlogSlider from "../component/blogSlider";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";


function Blog() {
	return (
		<>
		<Header3/>
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
						<h1>Privacy Policy</h1>
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
			<section className="content-inner-2" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="section-head style-1 text-center">
						<h6 className="sub-title bgl-primary m-b20 text-primary">Blog</h6>
						<h2 className="title">Latest Blog & News</h2>
					</div>
					<BlogSlider />
				</div>
			</section>
		<Footer3/>
		</>
	)
}

export default Blog;