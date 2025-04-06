import { useState } from "react";

export default function PlayersRuns() {
  const RunsStyle = {
    border: "2px solid red",
    borderRadius: "8px",
  };

  //   const [runs, setRuns] = useState(0);
  const [score, setScore] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const handlesSingles = () => {
    let newValue = score + 1;
    setScore(newValue);
  };
  const handlesFour = () => {
    let newValue = score + 4;
    let countFours = fours + 1;
    setScore(newValue);
    setFours(countFours);
  };
  const handlesSix = () => {
    let newValue = score + 6;
    let countSixes = sixes + 1;
    setScore(newValue);
    setSixes(countSixes);
  };

  return (
    <div style={RunsStyle}>
      <h3>Batsman: Bangladeshi </h3>
      {score >= 50 && <p>Congrats for your Fifty!!!!!</p>}
      <h4>Sixes: {sixes}</h4>
      <h4>Fours: {fours}</h4>
      <h1>Score: {score} </h1>
      <button onClick={handlesSingles}>Singles</button>
      <button onClick={handlesFour}>Four</button>
      <button onClick={handlesSix}>Six</button>
    </div>
  );
}
