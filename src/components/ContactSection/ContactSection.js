import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function ContactSection() {
  return (
    <div className="ContactSection text-center" id="Contact">

      <div className="ContantBody pb-5 pt-1">
        <h1 >Contact:&nbsp;</h1>
        <div className="linkes m-auto lign-items-center">
          <a href="https://www.linkedin.com/in/shefaadali/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="linkedin-icon mx-2"
            />
          </a>
          <a href="mailto:shefaadali@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="email-icon mx-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
