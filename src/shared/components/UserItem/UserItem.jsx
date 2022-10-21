import React from "react";
import Button from "../Button";
import UserAvatar from "../UserAvatar";

import s from "./UserItem.module.css";

const UserItem = ({ nickname, name, photo, onViewUserInfo }) => {
  const userPhoto = `assets/images/${photo}`;

  return (
    <li className={s.item}>
      <UserAvatar src={userPhoto} alt={nickname} width="50" height="50" />
      <h3>{name}</h3>
      <p>{nickname}</p>
      <Button onClick={() => onViewUserInfo(nickname)}>View</Button>
    </li>
  );
};

export default UserItem;
