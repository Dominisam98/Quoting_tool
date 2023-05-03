import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import { Redirect, useHistory } from "react-router-dom";
import Select from "react-select";
import "./email.css";
import axios from "axios";

function Email() {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();
  const [toSend, setToSend] = useState({
    from_name: "",
    to_email: "",
    to_name: "",
    price: "",
    message: "",
    aircraftimg: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_359qi12", "template_nxthbg7", toSend, "Qe2TZvVr5cF1xxQQ5")
      .then((response) => {
        history.push("/success");
        console.log("SUCCESS!", response.status, response.text, response);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.emailjs.com/api/v1.1/history?user_id=Qe2TZvVr5cF1xxQQ5&accessToken=-xGWYL1ltl3U9Az-ri-CM&page=1&count=50`
        )
        .then((res) => {
          const emails = res.data;
          console.log(emails.rows);
          let oneEmailRow;
          let templ;
          let email;
          for (let i = 0; i < emails.rows.length; i++) {
            oneEmailRow = emails.rows[i];
            templ = oneEmailRow.template_params;
            email = JSON.parse(templ);
            if (typeof email?.to_email != "undefined")
              console.log([email?.to_email, email?.to_name]);
          }
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="email-quote"> Email Quote</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="container-2">
          <div className="user-box">
            <div className="inputs">
              <label>From Name</label>
              <input
                type="text"
                className="input"
                name="from_name"
                placeholder="From name"
                value={toSend.from_name}
                onChange={handleChange}
              />
              <label>To Email</label>
              <input
                type="text"
                name="to_email"
                className="input"
                placeholder="To Email"
                value={toSend.to_email}
                onChange={handleChange}
              />
              <label>Price</label>
              <input
                type="number"
                name="price"
                className="input"
                placeholder="Price"
                value={toSend.price}
                onChange={handleChange}
              />
              <label>To Name</label>
              <input
                type="text"
                name="to_name"
                className="input"
                placeholder="To name"
                value={toSend.to_name}
                onChange={handleChange}
              />
              <label>Your Message</label>
              <input
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                className="input"
                onChange={handleChange}
              />
              <label>Your Email</label>
              <input
                type="text"
                name="reply_to"
                placeholder="Your email"
                className="input"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <label>Aircraft</label>
              <input
                type="text"
                name="aircraftimg"
                placeholder="Aircraft"
                className="input"
                value={toSend.aircraftimg}
                onChange={handleChange}
              />
            </div>

            <button className="login" type="submit">
              Send Email
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Email;
