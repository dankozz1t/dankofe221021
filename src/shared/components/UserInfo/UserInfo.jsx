import React from "react";
import Button from "shared/components/Button";
import UserAvatar from "shared/components/UserAvatar";

import { ReactComponent as IconClose } from "assets/icons/close.svg";

import s from "./UserInfo.module.css";

const UserInfo = ({ user, onViewUserInfo }) => {
  const { phone, name, nickname, email, position, photo } = user;

  const userPhoto = `images/${photo}`;
  const userEmail = `mailto:${email}`;
  const userPhone = `tel:${phone}`;

  return (
    <div className={s.box}>
      <button className={s.button} onClick={onViewUserInfo}>
        <IconClose />
      </button>
      <UserAvatar src={userPhoto} alt={nickname} size="80px" />
      <h2>{name}</h2>
      <h3 className={s.position}>{position}</h3>

      <div className={s.contactBox}>
        <div className={s.contactWrapper}>
          <h4>Phone</h4>
          <a href={userPhone}>{phone}</a>
        </div>

        <div className={s.contactWrapper}>
          <h4>Email</h4>
          <a href={userEmail}>{email}</a>
        </div>
      </div>
      <Button accent maxSize>
        Send message
      </Button>
    </div>
  );
};

export default UserInfo;
