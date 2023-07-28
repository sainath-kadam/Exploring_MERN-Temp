import React from 'react';

const ChildComponentProps = ({name,department,cgpa}) => {
  // const { name, department, cgpa } = props.student;
// jaisa uper kiya hai const.... vo system se bhi hum props  pass karte hai aur {{}} ye wale ke ander direcct nam likhe kar passkar skte hai 

  return (
    <div>
      <p>Name:{name}</p>
      <p>Department: {department}</p>
      <p>CGPA: {cgpa}</p>
    </div>
  );
};

export default ChildComponentProps;
// passed props.
//jo hame uper banaya hai  uski jagh card bhi ho skta hai jo hamare data ko welloranize kar ke rakhega 


// niche example hai 


// import React from "react";
// import "./TeamCard.css";
// import firstImg from "../../../Assets/first.png";
// import Second from "../../../Assets/second.png";
// const TeamCard = ({ title, captain,vicecaptain, img, link, first, second }) => {
//   return (
//     <section class="record">
//       <div class="record-arrow"></div>
//       <div
//         id="record1"
//         class="record-display"
//         style={{ backgroundImage: `url(${img})`, backgroundColor: "red" }}
//       ></div>
//       <div class="record-desc">
//         <h1>{title}</h1>
//         <h3>Captain:{captain}</h3>
//         <h3>Vice Captain:{vicecaptain}</h3>
//         <div className="prize-container">
//           <div className="prize-ele">
//             <img src={firstImg} alt="first" />
//             <p>{first}</p>
//           </div>
//           <div className="prize-ele">
//             <img src={Second} alt="second" />
//             <p>{second}</p>
//           </div>
//         </div>
//         <button className="organizer-button">
//           <a
//             href={link}
//             target="_blank"
//             className="organizer-button-a"
//             rel="noreferrer"
//           >
//             Team Members
//           </a>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TeamCard;



