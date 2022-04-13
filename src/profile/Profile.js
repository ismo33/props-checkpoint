import React from "react"
import  {PropTypes} from "prop-types" 
import './Profile.css'


const Profile =props => {
  return (
    <React.Fragment>
     <div className="card">
         <div className="upper-container">
             <div className="image-container">
            {props.children}
            </div>
         </div>
         <div className="lower-container">
           <h3>{props.name}</h3> 
           <h4>{props.profession}</h4>
           <p>{props.bio}</p>
         </div>
     </div>
     </React.Fragment> 
  );
}
Profile.defaultProps= {
    name:"name",
    bio:"bio",
    profession:"profession"
}

Profile.propTypes={
    name:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}

export default Profile