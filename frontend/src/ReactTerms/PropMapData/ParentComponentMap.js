

import React from 'react';
import ChildComponentProps from './ChildComponentProps';
import data from './Data';

const ParentComponentProps = () => {
  return (
    <div>
      {data.map((student) => (
        <ChildComponentProps 
        name={student.name}
        department={student.department}
        cgpa={student.cgpa}
         />
      ))}
    </div>
  );
};

export default ParentComponentProps;

//using map we are displying the  data file.
// map me jo nam diya vo  kuch bhi ho skta .


// yeha hua kyaa dekh:
//data banaya diya using object, vo data ParentComponentProps per aaya fir us ne map -mtlb bahut sare ek ek kar ke render karna aur  ChildComponentProps ko dekha  vo ChildComponentProps
// ke pass gaya,.  bola ye reneder kar do , vo bola kyaa render karu  ChildComponentProps bola tere props me jo props me aaya usse render kar de 







// niche example hai map ka  use kaise kare aur data kaise pass kare aur yehi hai jo hum render karna hai vo us wale jagh call kar dete hai 


// import React from "react";
// import "./Team.css";
// import TeamCard from "../TeamCard/TeamCard";
// import CricketData  from "../../../Data/CricketData";
// const Cricket = () => {
//   return (
//     <div className="event-page--container">
//       <div className="anim-main-container">
//         <h1 className="glitch heading-atrang-main">
//           <span aria-hidden="true">events</span>
//           events
//           <span aria-hidden="true">events</span>
//         </h1>
//       </div>
//       <div className="event-card--conatiner">
//         {CricketData.map((card) => 
//            (
//             <TeamCard
//               key={card.key}
//               title={card.title}
//               captain={card.captain}
//               vicecaptain={card.vicecaptain}
//               img={card.image}
//               link={card.link}
//               first={card.first}
//               second={card.second}
//             />
//           )
//         )}
//       </div>
//       <hr className="hr" />
     
//     </div>
//   );
// };

// export default Cricket;


