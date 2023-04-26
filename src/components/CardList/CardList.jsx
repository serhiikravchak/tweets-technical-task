import { useEffect, useState } from "react";
import { List } from "./CardList.styled";
import { CardItem } from "../CardItem/CardItem";
import { fetchUsers } from "../../helpers/operations";

export const CardList = () => {
  const [users, setUsers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res.data);       

      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const toggleFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <List>
      {users.map((user) => (
        <CardItem key={user.id} user={user} toggleFollowing={toggleFollowing} isFollowing={isFollowing} />
      ))}
    </List>
  );
};
