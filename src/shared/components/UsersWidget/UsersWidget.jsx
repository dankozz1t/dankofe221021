import React, { useRef, useState } from "react";

import UserList from "shared/components/UserList";
import UserInfo from "shared/components/UserInfo";

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
    <div className={s.widgetBgBox}>
      {viewUserInfo ? (
        <UserInfo user={userNow.current} onViewUserInfo={handleViewUserInfo} />
      ) : (
        <UserList users={users} onViewUserInfo={handleViewUserInfo} />
      )}
    </div>
  );
};

export default UsersWidget;
