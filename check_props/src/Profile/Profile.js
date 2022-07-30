import React from 'react'
import img from "./me.jpg"
const Profile = (props) => {
  return (
     
    <div className='con'>
       <img src={img} alt="" id='phme'/>
      <h1 className='con1'> my name is  {props.name}   </h1>
    <h2>Profession: {props.profession}</h2>
    <p> Bio: {props.bio}</p>
    <button className='btn' onClick={props.handleName}>Want the profile Handler name?</button> 
    
    </div>
    

  )
  
}

export default Profile
