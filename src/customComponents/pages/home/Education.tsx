import React, { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./Education.css";
import { addEducation, deleteEducation } from "../Redux/Action";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


interface EducationProps {
  edit: boolean;
}

const Education = (props) => {
  const education = useSelector((state: RootStateOrAny) => state.education);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const handleAddEducation = () => {
    if (
      newEducation.school.trim() !== "" &&
      newEducation.degree.trim() !== "" &&
      newEducation.graduationYear.trim() !== ""
    ) {
      dispatch(addEducation(newEducation));
      setNewEducation({ school: "", degree: "", graduationYear: "" });
    }
  };

  const handleDeleteEducation = (index: number) => {
    dispatch(deleteEducation(index));
  };
  console.log(education);
  return (
    <div className="container">
      <div className="profile-section">
        <div className="education-section">
          <h3>Education</h3>
          <ul className="education-list">
            <table style={{ border: '1px solid', width: "100%" }}>
              <thead>
                <tr>
                  <th>School:</th>
                  <th>Degree:</th>
                  <th>Year:</th>
                  {props.edit && <th>Action:</th>}
                </tr>
              </thead>
              <tbody>


                {education && education.length > 0 ? (

                  <ul>

                    {education.map((edu, index) => (

                      <tr className="list-name" key={index}>

                        <td>University: {edu.University}</td>

                        <td>Degree: {edu.Degree}</td>

                        <td>Field of Study: {edu.Field_Of_Study}</td>

                        <td>Year: {edu.Year}</td>
                        {props.edit && (

                          <><Button onClick={() => handleDeleteEducation(index)}>

                            Delete

                          </Button><Button onClick={() => navigate("/display")}>Show</Button></>
                        )}

                      </tr>

                    ))}
                  </ul>

                ) : (

                  <p>No details provided </p>

                )}
              </tbody>
            </table>
          </ul>

          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="School"
                value={newEducation.school}
                onChange={(e) => {
                  const schoolName = e.target.value;
                  if (/^[A-Za-z0-9\s]+$/.test(schoolName) || schoolName === "") {
                    setNewEducation({ ...newEducation, school: schoolName });
                  }
                }}
              />
                            <button onClick={handleAddEducation}>Add Experience</button>

              {/* Other input fields and button */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
