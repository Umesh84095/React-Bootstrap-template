import React, { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./Education.css";
import { addEducation, deleteEducation } from "../../../redux/actions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface EducationProps {
  edit: boolean;
}

const Education = (props: EducationProps) => {
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

  return (
    <div className="container">
      <div className="profile-section">
        <div className="education-section">
          <h3>Education</h3>
          <ul className="education-list">
            <table style={{ border: "1px solid", width: "100%" }}>
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Year</th>
                  {props.edit && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {education && education.length > 0 ? (
                  education.map((edu, index) => (
                    <tr className="list-name" key={index}>
                      <td>{edu.school}</td>
                      <td>{edu.degree}</td>
                      <td>{edu.graduationYear}</td>
                      {props.edit && (
                        <td>
                          <Button onClick={() => handleDeleteEducation(index)}>
                            Delete
                          </Button>
                          
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No details provided</td>
                  </tr>
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
                onChange={(e) =>
                  setNewEducation({ ...newEducation, school: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Year"
                value={newEducation.graduationYear}
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    graduationYear: e.target.value,
                  })
                }
              />
              <button onClick={handleAddEducation}>Add Education</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
