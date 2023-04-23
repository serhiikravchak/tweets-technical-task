import { useEffect, useState } from "react";
import { List } from "./CardList.styled";
import { CardItem } from "../CardItem/CardItem";
import { fetchUsers } from "../../helpers/operations";

export const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <List>
      {users.map((user) => (
        <CardItem key={user.id} user={user} />
      ))}
    </List>
  );
};
