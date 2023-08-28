import React from "react";
import "./Dashboard.css";
import Skills from "./home/Skills";
import Education from "./home/Education";
import About from "./home/About"
// import Header from "./Header";
import Experience from "./home/Experience";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const Navigate = useNavigate();

  const onEdit = () => {
    Navigate("/Profile");
  };

  return (
    <>
      {/* <Header /> */}
      <div className="master-container">
      <div className="dashboard-container">
        <div className="dashboard-profile-section">
          <button className="edit-button" onClick={onEdit}>
            Edit
          </button>
          
          <About edit={false} />
          <div>
            <br></br>
          </div>
          <Education edit={false} />
          <div>
            <br></br>
          </div>
          <Experience edit={false}/>
          <div>
            <br></br>
          </div>
          <Skills edit={false} />
         
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;