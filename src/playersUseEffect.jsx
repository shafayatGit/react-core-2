import { useEffect, useState } from "react";

export default function PlayersEffect() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="users_card">
      <h3>Players: {players.length}</h3>
      <div className="users_card">
        {players.map((player) => (
          <li>{player.name}</li>
        ))}
      </div>
    </div>
  );
}
