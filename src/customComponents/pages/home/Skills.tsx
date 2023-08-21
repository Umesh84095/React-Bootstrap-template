import React, { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./Skills.css";
import { addSkill, deleteSkill } from "../Redux/Action";

function Skills(props) {
  const skills = useSelector((state: RootStateOrAny) => state.skills);
  const dispatch = useDispatch();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      dispatch(addSkill(newSkill));
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };
console.log(skills)
  return (
    <>
      <div className="skills-section">
        <h3>Skills</h3>
        {props.edit ? (
          <>
            <ul className="skills-list">
              {skills && skills.length > 0 ? (
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index} className="skills-list-item">
                      {skill.skill}
                      <button onClick={() => handleDeleteSkill(index)}>
                        Delete
                      </button>
                      console.log(skill);
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No details provided </p>
              )}
            </ul>
            {props.edit && (
              <div className="add-section">
                <input
                  type="text"
                  placeholder="Add skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <button onClick={handleAddSkill}>Add Skill</button>
              </div>
            )}
          </>
        ) : (
          <ul className="skills-list">
            {/* {skills.map((skill, index) => (
              <li key={index} className="skills-list-item">
                {skill}
                
              </li>
            ))}  */}
            {/* <p>{skills.map((skill) => skill).join(", ")}</p> */}
          </ul>
        )}
      </div>
    </>
  );
}

export default Skills;
