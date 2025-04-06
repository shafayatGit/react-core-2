export default function Friend({ friend }) {
  // console.log(friend);
  return (
    <div className="users_card">
      <h3>name:{friend.name}</h3>
      <h3>email:{friend.email}</h3>
      <h3>phone:{friend.phone}</h3>
    </div>
  );
}
