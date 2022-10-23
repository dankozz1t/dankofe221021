import React from "react";

import s from "./UserAvatar.module.css";

const UserAvatar = ({ src, nickname, size }) => {
  return (
    <div className={s.circle} style={{ width: size, height: size }}>
      <img
        className={s.avatar}
        src={src}
        alt={nickname}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default UserAvatar;
