import React from "react";

import Button from "shared/components/Button";
import UserAvatar from "shared/components/UserAvatar";

import s from "./UserItem.module.css";

const UserItem = ({ nickname, name, photo, onViewUserInfo }) => {
  const userPhoto = `images/${photo}`;

  return (
    <li className={s.item}>
      <div className={s.dataBox}>
        <UserAvatar src={userPhoto} alt={nickname} size="50px" />
        <div>
          <h3 className={s.name}>{name}</h3>
          <p className={s.nickname}>{nickname}</p>
        </div>
      </div>

      <Button onClick={() => onViewUserInfo(nickname)}>View</Button>
    </li>
  );
};

export default UserItem;
