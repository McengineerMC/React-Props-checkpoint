import React from 'react'
import PropTypes from 'prop-types';

Profile.defaultProps = {
    Fullname:  "UserName",
    bio:  "UserBio",
    profession: "userProession"  };

function Profile(props) {
    return (
        <>
           {props.children}
           <h1 onClick={props.handleName} style={props.style3}>{props.Fullname}</h1>
           <h2 style={props.style3}>{props.profession}</h2>
           <p style={props.style4}>Bio: {props.bio}</p>
       </>
    )
}
Profile.propTypes = {
    Fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
  }

export default Profile
