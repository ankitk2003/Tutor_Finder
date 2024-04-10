import style from "./tutor.module.css";
import profilePicture from "./profile-dummy.jpg";
import { PiStudentBold } from "react-icons/pi";
const FindTutor = () => {
  const tutorData = [
    {
      name: "John Smith",
      image: profilePicture,
      studies: {
        subject: "Mathematics",
        level: "High School",
        qualification: "Bachelor's Degree in Mathematics",
      },
      charges: {
        hourly_rate: 30,
        session_duration: "1 hour",
      },
      availability: {
        days_available: ["Monday", "Wednesday", "Friday"],
        time_slots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
      },
      contact: {
        email: "john.smith@example.com",
        phone: "+1234567890",
        location: "City, Country",
      },
      additional_information: {
        about:
          "I have been tutoring mathematics for 5 years and I specialize in helping high school students improve their grades.",
      },
    },
    {
      name: "Emily Johnson",
      image: profilePicture,
      studies: {
        subject: "English",
        level: "Middle School",
        qualification: "Bachelor's Degree in English Literature",
      },
      charges: {
        hourly_rate: 25,
        session_duration: "1 hour",
      },
      availability: {
        days_available: ["Tuesday", "Thursday", "Saturday"],
        time_slots: ["9:00 AM - 11:00 AM", "1:00 PM - 3:00 PM"],
      },
      contact: {
        email: "emily.johnson@example.com",
        phone: "+1987654321",
        location: "City, Country",
      },
      additional_information: {
        about:
          "I am passionate about literature and love to help students improve their language skills.",
      },
    },
    {
      name: "Michael Brown",
      image: profilePicture,
      studies: {
        subject: "Physics",
        level: "High School",
        qualification: "Master's Degree in Physics",
      },
      charges: {
        hourly_rate: 35,
        session_duration: "1 hour",
      },
      availability: {
        days_available: ["Monday", "Wednesday", "Friday"],
        time_slots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
      },
      contact: {
        email: "michael.brown@example.com",
        phone: "+1122334455",
        location: "City, Country",
      },
      additional_information: {
        about:
          "I have a deep understanding of physics concepts and enjoy sharing my knowledge with students.",
      },
    },
    {
      name: "Sophia Garcia",
      image: profilePicture,
      studies: {
        subject: "Chemistry",
        level: "High School",
        qualification: "Bachelor's Degree in Chemistry",
      },
      charges: {
        hourly_rate: 30,
        session_duration: "1 hour",
      },
      availability: {
        days_available: ["Monday", "Wednesday", "Friday"],
        time_slots: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"],
      },
      contact: {
        email: "sophia.garcia@example.com",
        phone: "+9876543210",
        location: "City, Country",
      },
      additional_information: {
        about:
          "I make chemistry fun and understandable for students of all levels.",
      },
    },
    {
      name: "Daniel Martinez",
      image: profilePicture,
      studies: {
        subject: "History",
        level: "High School",
        qualification: "Bachelor's Degree in History",
      },
      charges: {
        hourly_rate: 25,
        session_duration: "1 hour",
      },
      availability: {
        days_available: ["Tuesday", "Thursday", "Saturday"],
        time_slots: ["10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM"],
      },
      contact: {
        email: "daniel.martinez@example.com",
        phone: "+1122334455",
        location: "City, Country",
      },
      additional_information: {
        about:
          "I bring history to life through engaging lessons and discussions.",
      },
    },
  ];

  // Add more tutor data here if needed

  return (
    <div>
      <div className={style.dropDownDiv}>

        <div className={style.dropDown1}>
        <p><strong><h3>I want to learn:</h3></strong></p>
        <select id="fruitSelect">
          <option selected>English</option>
          <option>Science</option>
          <option>Hindi</option>
          <option>Mathematics</option>
        </select>
        </div>

        <div className={style.dropDown2}>
        <p><strong><h3>Price per lesson:</h3></strong></p>
        <select id="fruitSelect">
          <option selected>$0-10</option>
          <option>$10-30</option>
          <option>$30-60</option>
          <option>$60-100</option>
        </select>
        </div>

        <div className={style.dropDown3}>
        <p><strong><h3>Country of origin:</h3></strong></p>
        <select id="fruitSelect">
          <option selected>Any Country</option>
          <option>India</option>
          <option>USA</option>
          <option>Nepal</option>
        </select>
        </div>

        <div className={style.dropDown4}>
        <p><strong><h3>Speciality</h3></strong></p>
        <select id="fruitSelect">
          <option selected>No speciality</option>
          <option >Artificial Intelligence</option>
          <option>Digital Marketing</option>
          <option>Multi-Language</option>
        </select>
        </div>

      </div>
      <h2>
        <center>Teachers matching Your need:</center>
      </h2>
      {tutorData.map((tutor, index) => (
        <div className={style.cardContainer}>
          <div className={style.card} key={index}>
            <img
              src={tutor.image}
              alt={tutor.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className={style.dataDiv}>
              <h2>{tutor.name}</h2>
              <p>
                <strong>Subject:</strong> {tutor.studies.subject}
              </p>
              <p>
                <strong>Level:</strong> {tutor.studies.level}
              </p>
              <p>
                <strong>
                  <PiStudentBold size={30} />
                </strong>{" "}
                {tutor.studies.qualification}
              </p>
              <p>
                <strong>Hourly Rate:</strong> ${tutor.charges.hourly_rate}
              </p>
              <p>
                <strong>Session Duration:</strong>{" "}
                {tutor.charges.session_duration}
              </p>
              <p>
                <strong>Days Available:</strong>{" "}
                {tutor.availability.days_available.join(", ")}
              </p>
              <p>
                <strong>Time Slots:</strong>{" "}
                {tutor.availability.time_slots.join(", ")}
              </p>
              <p>
                <strong>Email:</strong> {tutor.contact.email}
              </p>
              <p>
                <strong>Phone:</strong> {tutor.contact.phone}
              </p>
              <p>
                <strong>Location:</strong> {tutor.contact.location}
              </p>
              <p>
                <strong>About:</strong> {tutor.additional_information.about}
              </p>
            </div>
            <div className={style.buttonDiv}>
              <button className={style.button1}>Book Trail Session</button>
              <br></br>
              <br></br>
              <button className={style.button2}>Send Message</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FindTutor;
