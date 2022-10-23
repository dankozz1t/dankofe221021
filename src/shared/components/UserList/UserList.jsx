import React, { useState } from "react";

import Button from "shared/components/Button";
import UserItem from "shared/components/UserItem";

import s from "./UserList.module.css";

const UserList = ({ users, onViewUserInfo }) => {
  const [isShowBtn, setIsShowBtn] = useState(users.length > 3);

  const handleViewAllClick = () => {
    setIsShowBtn(!isShowBtn);
  };

  const renderUsers = () => {
    if (users.length > 3 && isShowBtn) {
      return users.slice(0, 3);
    }

    return users;
  };

  return (
    <>
      <ul className={s.list}>
        {renderUsers().map(({ nickname, name, photo }) => (
          <UserItem
            key={nickname}
            nickname={nickname}
            name={name}
            photo={photo}
            onViewUserInfo={onViewUserInfo}
          />
        ))}
      </ul>
      {isShowBtn && (
        <Button maxSize onClick={handleViewAllClick}>
          View All
        </Button>
      )}
    </>
  );
};

export default UserList;
