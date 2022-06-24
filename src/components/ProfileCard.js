import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileImageWithDefault from "./ProfileImageWithDefault";
import { useTranslation } from "react-i18next";

const ProfileCard = (props) => {
  const { username: loggedInUsername } = useSelector((store) => ({
    username: store.username,
  }));
  const routeParams = useParams();

  const { t } = useTranslation();

  const pathUsername = routeParams.username;

  const { user } = props;
  const { username, displayName, image } = user;

  //const pathUsername = props.match.params.username;
  //const loggedInUsername = props.username;
  let message = "We cannot edit";
  if (pathUsername === loggedInUsername) {
    message = "We can edit";
  }

  return (
    <div className="card text-center">
      <div className="card-header">
        <ProfileImageWithDefault
          className="rounded-circle shadow"
          width="200"
          height="200"
          alt={`${username} profile`}
          image={image}
        />
      </div>
      <div className="card-body text-center">
        <h3>
          {displayName}@{username}
        </h3>
        <button className="btn btn-success d-inline-flex">
          <span className="material-icons">edit</span>
          {t("Edit")}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
