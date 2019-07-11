import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
function Form() {
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@import url('https://fonts.googleapis.com/css?family=Roboto');\n"
        }}
      />
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112061.09262729759!2d77.208022!3d28.632485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x644e33bc3def0667!2sIndior+Tours+Pvt+Ltd.!5e0!3m2!1sen!2sus!4v1527779731123"
            width="100%"
            height="650px"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        <div className="contact-form">
          <h1 className="title">Contact Us</h1>
          <h2 className="subtitle">We are here assist you.</h2>
          <form action>
            <input type="text" name="name" placeholder="Your Name" />
            <input
              type="email"
              name="e-mail"
              placeholder="Your E-mail Adress"
            />
            <input type="tel" name="phone" placeholder="Your Phone Number" />
            <textarea
              name="text"
              id
              rows={8}
              placeholder="Your Message"
              defaultValue={""}
            />
            <button style={{ backgroundColor: "#2bbbad" }} className="btn-send">
              Get a Call Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
