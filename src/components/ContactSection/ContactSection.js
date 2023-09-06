import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function ContactSection() {
  return (
    <div className="ContactSection text-center" id="Contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
    <path
        fill="#313d5a"
        fillOpacity="1"
        d="M0,64L21.8,64C43.6,64,87,64,131,80C174.5,96,218,128,262,144C305.5,160,349,160,393,154.7C436.4,149,480,139,524,144C567.3,149,611,171,655,176C698.2,181,742,171,785,154.7C829.1,139,873,117,916,122.7C960,128,1004,160,1047,160C1090.9,160,1135,128,1178,117.3C1221.8,107,1265,117,1309,117.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,240L1418.2,240C1396.4,240,1353,240,1309,240C1265.5,240,1222,240,1178,240C1134.5,240,1091,240,1047,240C1003.6,240,960,240,916,240C872.7,240,829,240,785,240C741.8,240,698,240,655,240C610.9,240,567,240,524,240C480,240,436,240,393,240C349.1,240,305,240,262,240C218.2,240,175,240,131,240C87.3,240,44,240,22,240L0,240Z"
    ></path>
</svg>

      <div className="ContantBody py-5">
        <h1 className=" text-light ">Contact:&nbsp;</h1>
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
