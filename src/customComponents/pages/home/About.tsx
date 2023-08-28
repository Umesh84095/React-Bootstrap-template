import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./About.css";
import IconButton from "@mui/material/IconButton";
import { Button, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
// import { updateAbout } from "../../../redux/actions";

interface AboutProps {
  edit: boolean;
}

const About: React.FC<AboutProps> = (props) => {
  const userAbout = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(userAbout || "");
  const [text, setText] = useState(
    ""
    // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum nulla, lacinia id tempor sed, dapibus a urna. Nullam metus ante, imperdiet quis quam et, porta dictum massa. Vivamus semper iaculis imperdiet. In hac habitasse platea dictumst. Quisque quis hendrerit nunc, vitae semper ipsum. Aenean pulvinar ac leo vitae iaculis"
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDone = () => {
    setIsEditing(false);
  };
  const onChangeAbout = (e: ChangeEvent<HTMLInputElement>) => {
    setAbout(e.target.value);
  };

  // useEffect(() => {
  //   if (props.edit) {
  //     dispatch(updateAbout(about));
  //   }
  // }, [dispatch, props.edit, about]);

  return (
    <div className="container">
      <div className="about-section">
        <h3>About</h3>
        <div className="add-section">
          {isEditing ? (
            <Button className="done-button" onClick={handleDone}>
              Done
            </Button>
          ) : (
            <Tooltip  title={"Edit"}>
              <IconButton>
                <Edit onClick={handleEdit} />
              </IconButton>
            </Tooltip>
          )}
        </div>

        {isEditing ? (
          <textarea
            rows={4}
            cols={100}
            className="edit-textarea"
            value={text}
            onChange={handleChange}
          />
        ) : (
          <p className="display-text">{text}</p>
        )}
      </div>
    </div>
  );
};

export default About;
