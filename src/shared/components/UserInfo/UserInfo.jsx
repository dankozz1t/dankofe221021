import React from "react";
import Button from "../Button";
import UserAvatar from "../UserAvatar";

import s from "./UserInfo.module.css";

const UserInfo = ({ user, onViewUserInfo }) => {
  const { phone, name, nickname, email, position, photo } = user;

  const userPhoto = `assets/images/${photo}`;

  return (
    <div className={s.box}>
      <Button onClick={onViewUserInfo}>X</Button>
      <UserAvatar src={userPhoto} alt={nickname} width="50" height="50" />
      <h2>{name}</h2>
      <h3>{position}</h3>
      <p>
        <span>Phone</span> {phone}
      </p>
      <p>
        <span>Email</span> {email}
      </p>
      <Button>Send message</Button>
    </div>
  );
};

export default UserInfo;
