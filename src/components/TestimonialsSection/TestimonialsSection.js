import "./TestimonialsSection.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
function TestimonialsSection() {
  return (
    <div className="TestimonialsSection">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#313d5a"
          fillOpacity="1"
          d="M0,64L21.8,64C43.6,64,87,64,131,80C174.5,96,218,128,262,144C305.5,160,349,160,393,154.7C436.4,149,480,139,524,144C567.3,149,611,171,655,176C698.2,181,742,171,785,154.7C829.1,139,873,117,916,122.7C960,128,1004,160,1047,160C1090.9,160,1135,128,1178,117.3C1221.8,107,1265,117,1309,117.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <div className="TestimonialsContant ">
        <div className="container">
        <h1 className="text-center text-light py-4"> Testimonials</h1>
        <div className="d-flex flex-wrap justify-content-center pb-5">
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
        </div>
      </div>
      <svg
        className="second-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 70 1440 200"
      >
        <path
          fill="#313d5a"
          fillOpacity="1"
          d="M0,160L30,181.3C60,203,120,245,180,245.3C240,245,300,203,360,176C420,149,480,139,540,160C600,181,660,235,720,224C780,213,840,139,900,117.3C960,96,1020,128,1080,154.7C1140,181,1200,203,1260,197.3C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default TestimonialsSection;
