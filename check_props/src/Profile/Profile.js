import React from 'react';
import PropTypes from 'prop-types';
const Profile = ({name,profession,bio,handleName ,children}) => {
  return (
     
    <div className='con'>
       {children}
      <h1 className='con1'> my name is  {name}   </h1>
    <h2>Profession: {profession}</h2>
    <p> Bio: {bio}</p>
    <button className='btn' onClick={()=>handleName()}>Want the profile Handler name?</button> 
    
    </div>
    

  );
  
}
Profile.propTypes = { 
  name: PropTypes.bool,
  bio: PropTypes.string,
  profession: PropTypes.string, handleName: PropTypes.func}

  Profile.defaultProps = {name : "Ned Stark",bio: "NO Bio!!",profession: "jobless?" 
  };
 
export default Profile;
