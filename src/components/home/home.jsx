import { Carousel } from "bootstrap";
import "./home.css";
import Footer from "../footer/footer";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiNotepadLight } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <div className="body-div">
        <div className="child-div">
          {" "}
          <center>
            <p style={{ color: "white" }}>
              {" "}
              <h1>One stop solution for your tutor need !</h1>
            </p>
            <input type="text" placeholder="Find all your Queries...."></input>
          </center>
        </div>
      </div>

      <div className="card-div">
        <div className="card-1">
          <center>
            <FaUserGroup size={50} />
            <p>
              <h2>
                One-to-one <br></br>
                Tutoring
              </h2>
            </p>
            <p>
              One-to-one tutoring offers personalized attention and customized
              learning experiences, fostering deep understanding and rapid
              progress tailored to the individual student's needs and learning
              style
            </p>
          </center>
        </div>

        <div className="card-1">
          <center>
            <PiNotepadLight size={50} />
            <p>
              <h2>
                Personalized Home-work<br></br>
              </h2>
            </p>
            <p>
              Personalized homework assignments cater specifically to each
              student's strengths, weaknesses, and learning goals, maximizing
              their engagement and mastery of the material
            </p>{" "}
          </center>
        </div>

        <div className="card-1">
          <center>
            <MdOutlineMapsHomeWork size={50} />
            <p>
              <h2>
                Learn From Home<br></br>
              </h2>
            </p>
            <p>
              Learning from home provides the flexibility and comfort to pursue
              educational goals while adapting to individual schedules and
              preferences, fostering a conducive environment for focused and
              effective learning
            </p>{" "}
          </center>
        </div>
      </div>

      <div className="div-3">
        <div className="para-div">
          <center>
            <h1>Connect with Professional and Peer Tutors</h1>
            <p>
              Connecting with professional and peer tutors is a vital resource
              for students seeking academic support. Professional tutors offer
              specialized expertise and structured guidance tailored to
              individual learning needs. Meanwhile, peer tutors provide
              relatable mentorship and peer-to-peer learning experiences,
              offering practical insights and strategies for success. Whether
              aiming to master challenging subjects or excel academically,
              leveraging both professional and peer tutoring resources fosters a
              supportive environment for collaborative learning and academic
              growth."
            </p>
            <button>Know more</button>
          </center>
        </div>
        <PiStudentBold size={100} className="icon-class" />
      </div>
      <div className="div-4">
        <center>
          <div className="para-div-2">
            <p>
              <h1>Want to tutor with us ?</h1>
            </p>
            <p>
              Passionate about education and eager to make a difference? Join us
              as a tutor and inspire students to reach their full potential
              while fostering a love for learning
            </p>
            <button> Get Started</button>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
};
export default Home;
