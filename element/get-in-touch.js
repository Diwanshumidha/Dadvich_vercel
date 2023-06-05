import React, { useState } from "react";
import emailjs from "emailjs-com";

function GetInTouch3() {
  emailjs.init("H1gzgXLZ1Z9NxvYEK");
  const [sendingstatus, setsendingstatus] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formdata = Object.fromEntries(formData.entries());
    console.log(formdata);
    setsendingstatus(true);

    emailjs
      .send("service_z6xpptm", "template_sv8se54", {
        from_name: formdata.full_name,
        to_name: "Sir",
        message: `Hello Good Evening Sir,   
            You Got Message from ${formdata.full_name} with Email ${formdata.email} and mobile number ${formdata.countrycode}${formdata.phone} 
            from ${window.location}
            -----------------------------------------
            Title: ${formdata.title}
            Message:${formdata.message}
            -----------------------------------------
        `,
      })
      .then(
        (result) => {
          sendtodb(formdata);
          setsendingstatus(false);
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );

  };

  function sendtodb(formdata) {
    fetch('http://localhost:5050/contactform/createinquiry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
    })
    .then((response) => {
        if (response.ok) {
            console.log(response);
            alert("Your Response Has Been Sent");
        } else {
            throw new Error('Request failed');
        }
    })
    .catch((error) => {
        console.log(error);
    });
};
  return (
    <>
      {/* <!-- Contact Form --> */}
      <section className="content-inner" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media">
                <img src="images/about/img8.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <form
                className="dlab-form style-1 dzForm"
                onSubmit={sendEmail}
                method="POST"
              >
                <div className="section-head style-3">
                  <h2 className="title m-t10">Get In Touch With Us</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className=".dlab-social-icon contact_dlab">
                  <h5
                    style={{
                      marginBottom: "40px",
                      marginRight: "10px",
                    }}
                  >
                    Reach Us On -
                  </h5>
                  <a
                    class="fa fa-whatsapp con_whatsapp"
                    href="https://twitter.com/login?lang=en"
                  ></a>
                  <a
                    class="fa fa-skype con_whatsapp"
                    href="https://twitter.com/login?lang=en"
                  ></a>
                </div>
                <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="reCaptchaEnable"
                  value="0"
                />
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="full_name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="email"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      className="input-group code_group"
                      style={{
                        width: "20%",
                      }}
                    >
                      <input
                        name="countrycode"
                        type="text"
                        required
                        className="form-control code "
                        placeholder="+91"
                        style={{
                          borderTopRightRadius: "0 !important",
                        }}
                      />
                    </div>
                    <div
                      className="input-group phno_group"
                      style={{
                        width: "80%",
                      }}
                    >
                      <input
                        name="phone"
                        type="text"
                        required=""
                        class="form-control phno"
                        placeholder="Phone No."
                        style={{
                          borderBottomLeftRadius: "0 !important",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="title"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Project Title"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <textarea
                        name="message"
                        className="form-control"
                        required
                        placeholder="Explain Requirements"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-corner gradient btn-block btn-primary"
                    >
                      {sendingstatus ? (
                        <span>Sending...</span>
                      ) : (
                        <span>Submit Now</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch3;
