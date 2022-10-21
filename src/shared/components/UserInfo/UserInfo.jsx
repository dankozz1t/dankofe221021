import React from "react";
import Button from "shared/components/Button";
import UserAvatar from "shared/components/UserAvatar";

import s from "./UserInfo.module.css";

const UserInfo = ({ user, onViewUserInfo }) => {
  const { phone, name, nickname, email, position, photo } = user;

  const userPhoto = `assets/images/${photo}`;
  const userEmail = `mailto:${email}`;

  return (
    <div className={s.box}>
      <Button onClick={onViewUserInfo}>X</Button>
      <UserAvatar src={userPhoto} alt={nickname} width="50" height="50" />
      <h2>{name}</h2>
      <h3>{position}</h3>

      <div className={s.contactBox}>
        <p>Phone</p>
        <p>{phone}</p>
      </div>

      <div className={s.contactBox}>
        <p>Email</p>
        <a href={userEmail}>{email}</a>
      </div>

      <Button>Send message</Button>
    </div>
  );
};

export default UserInfo;
