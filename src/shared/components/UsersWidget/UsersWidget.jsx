import React, { useRef, useState } from "react";
import UserInfo from "../UserInfo";

import UserList from "../UserList";

import s from "./UsersWidget.module.css";

const UsersWidget = ({ users }) => {
  const [viewUserInfo, setViewUserInfo] = useState(false);
  const userNow = useRef();

  const handleViewUserInfo = (nickname) => {
    setViewUserInfo(!viewUserInfo);

    if (!viewUserInfo) {
      userNow.current = users.find((user) => user.nickname === nickname);
      return;
    }

    userNow.current = [];
  };

  return (
    <div className={s.box}>
      {viewUserInfo ? (
        <UserInfo user={userNow.current} onViewUserInfo={handleViewUserInfo} />
      ) : (
        <UserList users={users} onViewUserInfo={handleViewUserInfo} />
      )}
    </div>
  );
};

export default UsersWidget;