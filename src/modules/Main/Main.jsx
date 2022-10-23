import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getUsers } from "redux/users/selectors";

import Container from "shared/components/Container";
import UsersWidget from "shared/components/UsersWidget";

import s from "./Main.module.css";

const Main = () => {
  const users = useSelector(getUsers, shallowEqual);

  return (
    <main className={s.mainBgBox}>
      <Container>
        <UsersWidget users={users} />
      </Container>
    </main>
  );
};

export default Main;
