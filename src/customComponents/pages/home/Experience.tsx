import React, { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./Experience.css";
import { addExperience, deleteExperience } from "../../../redux/actions";

interface ExperienceProps {
  edit: boolean;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const experience = useSelector((state: RootStateOrAny) => state.experience);
  const dispatch = useDispatch();

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    yearsWorked: "",
  });

  const handleAddExperience = () => {
    if (
      newExperience.company.trim() !== "" &&
      newExperience.position.trim() !== "" &&
      newExperience.yearsWorked.trim() !== ""
    ) {
      dispatch(addExperience(newExperience));
      setNewExperience({ company: "", position: "", yearsWorked: "" });
    }
  };

  const handleDeleteExperience = (index: number) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="experience-section">
          <h3>Experience</h3>
          <ul className="experience-list">
            {experience && experience.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Years Worked</th>
                    {props.edit && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {experience.map((exp, index) => (
                    <tr key={index}>
                      <td>{exp.company}</td>
                      <td>{exp.position}</td>
                      <td>{exp.yearsWorked}</td>
                      {props.edit && (
                        <td>
                          <button onClick={() => handleDeleteExperience(index)}>
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No details provided </p>
            )}
          </ul>
          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) => {
                  const companyName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(companyName) ||
                    companyName === ""
                  ) {
                    setNewExperience({
                      ...newExperience,
                      company: companyName,
                    });
                  }
                }}
              />
              <input
                type="text"
                placeholder="Work Experience"
                value={newExperience.yearsWorked}
                onChange={(e) => {
                  const yearsWorked = e.target.value;
                  if (/^\d*$/.test(yearsWorked) || yearsWorked === "") {
                    setNewExperience({ ...newExperience, yearsWorked });
                  } else {
                    alert("Please enter a valid number");
                  }
                }}
              />
              <input
                type="text"
                placeholder="Position"
                value={newExperience.position}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    position: e.target.value,
                  })
                }
              />
              <button onClick={handleAddExperience}>Add Experience</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
