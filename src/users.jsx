import { use } from "react";

export default function Users({ fetchData }) {
  const users = use(fetchData);
  //   console.log(users);

  return (
    <div className="users_card">
      <h1>Users: {users.length}</h1>
    </div>
  );
}
