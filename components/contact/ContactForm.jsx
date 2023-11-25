import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { sendQuery } from "../../actions/sendQuery";

const ContactForm = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const showSuccessMessage = () => {
    if (message) {
      return (
        <p
          style={{
            margin: "1rem 0",
            position: "relative",
            display: "block",
            alignItems: "center",
            backgroundColor: "#6c757d",
            height: "100px",
            width: "100%",
            padding: "1rem",
            color: "white",
          }}
        >
          {message}
        </p>
        // alert("Hello! I am an alert box!!");
      );
    } else return "";
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = {};
    // console.log("fier: "+e.currentTarget.elements.robot[4])
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    if (formData.robot == 5) {
      sendQuery(formData).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          router.push("/message-sent");
        }
      });
    } else {
      setMessage("You seems to be a robot. Or solve the sum to send.");
      showSuccessMessage();
    }
  }
  // console.log("hellpo : "+formData.robot);
  // if (formData.robot == 5) {
  //   fetch("/api/contact-form", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   }).then((response) => {
  //     if (response.error) {
  //       console.log("Hello wrin");
  //       console.log(response.error);
  //       console.log("Hello wrin");
  //     } else {
  //       setMessage(
  //         "Your message has been sent successfully. Will contact you shortly. Thank you."
  //       );

  //       router.push("/message-sent");
  //       // showSuccessMessage();
  //     }
  //   });
  // } else {
  //   setMessage("You seems to be a robot. Or solve the sum to send.");
  //   showSuccessMessage();
  // }

  return (
    <div className="container" style={{ width: "400px " }}>
      <form onSubmit={handleOnSubmit}>
        <div className="messages" />
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="name1"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="email1"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="subject1"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div class="mb-3">
          <label for="query1" class="form-label">
            Feedback/Query
          </label>
          <textarea
            class="form-control"
            id="query1"
            rows="3"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label style={{ color: "grey" }} className="form-group ">
            Prove you are not a robot. What is 2+3?
          </label>
          <input
            type="text"
            class="form-control"
            id="robot1"
            name="robot"
            placeholder="Write the sum here."
            required
          />
        </div>

        <div className="col">
          <div className="d-flex -12 text-center">
            <button className="btn btn-outline-secondary">Send Message</button>
            {loading ? (
              <Box sx={{ display: "flex", fontSize: "30px" }}>
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}
          </div>

          {showSuccessMessage()}
        </div>
        {/* End .col-12 */}

        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
