import { useState } from "react";
import "./Contact.css";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/Facebook.png";

const Contact = () => {
  const [done, setDone] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cebc5587-a3ad-4962-bc34-6dae0fd57f5a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setDone(true);
      event.target.reset();
    }
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Akin19">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>

      {/* left side ends here */}

      <div className="c-right">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="send" className="button" />
          <span>
            {done &&
              "Thanks for Contacting me, Within a hour I will get back to you."}
          </span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
