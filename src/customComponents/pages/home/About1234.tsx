import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./About.css";
import { updateAbout } from "../Redux/Action";


interface AboutProps {
  edit: boolean;
}

const About1234: React.FC<AboutProps> = (props) => {
  const userAbout = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(userAbout || "");

  const onChangeAbout = (e: ChangeEvent<HTMLInputElement>) => {
    setAbout(e.target.value);
  };

  useEffect(() => {
    if (props.edit) {
      dispatch(updateAbout(about));
    }
  }, [dispatch, props.edit, about]);

  return (
    <div className="container">
      <div className="about-section">
        <h3>About</h3>
        <div className="add-section">
          {props.edit ? (
            <input
              type="text"
              placeholder="Add About"
              value={about}
              onChange={onChangeAbout}
            />
          ) : (
            <p>{about}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About1234;
