import React from "react";

import s from "./UserAvatar.module.css";

const UserAvatar = (props) => {
  const { src, nickname } = props;
  return (
    <div className={s.circle}>
      <img className={s.avatar} src={src} alt={nickname} {...props} />
    </div>
  );
};

export default UserAvatar;
