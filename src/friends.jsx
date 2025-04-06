import { use } from "react";
import Friend from "./friend";

export default function Friends({ friendsData }) {
  const friends = use(friendsData);
  return (
    <div className="users_card">
      <h2>Friends: {friends.length} </h2>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
