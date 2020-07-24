import React from 'react';
import './App.css'
import Profile from './profile/Profile'

const Fullname ="Chedi Messaoudi";
const bio ="Mechanical engineer and Full stack web developer";
const profession ="Engineer";
const handleName=()=>{
  alert(`${Fullname}`);
}
const style1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  margin: "100px",
  padding:"100px",
  backgroundColor: "white",
  boxShadow:"5px 10px"
 
}
const style2 = {
  borderRadius: "50%",
  width:"50%",
}
const style3 = {
  fontFamily: "Roboto sans-serif",
  fontSize: "30px",
  fontStyle: "itali", 
}
const style4 = {
  fontFamily: "Roboto sans-serif",
  fontSize: "25px",
  fontStyle: "itali",
  textDecoration:"underline"
}


function App() {

  return (
    <div style={style1}>
      <Profile Fullname={Fullname} bio={bio} profession={profession} handleName={handleName} style3={style3} style4={style4}>
        <img src="/image2.jpg" alt="image2" style={style2}/>
      </Profile>
    </div>
  );
};

export default App;
