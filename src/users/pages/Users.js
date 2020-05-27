import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Manuel Romero",
      image:
        "https://institutodeinnovacionlegal.com/wp-content/uploads/2017/01/user-icon-2098873_960_720.png",
      payments: 3,
    },
    {
      id: "u2",
      name: "Clara Lopez",
      image:
        "https://institutodeinnovacionlegal.com/wp-content/uploads/2017/01/user-icon-2098873_960_720.png",
      payments: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
