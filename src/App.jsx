import { Suspense } from "react";
import "./App.css";
import Counter from "./counter";
import PlayersRuns from "./runs";
import Users from "./users";
import Friends from "./friends";
import Posts from "./posts";
import PlayersEffect from "./playersUseEffect";

const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const friendsData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const postsData = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

function App() {
  function handleClick2() {
    alert("I am 2nd button clicked");
  }

  const handleClick3 = () => {
    alert("I am External array function");
  };

  const add5 = (num) => {
    num += 5;
    alert(num);
  };

  return (
    <>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchData={fetchData}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsData={friendsData}></Friends>
      </Suspense>
      <Suspense fallback={<h3>Posts are coming</h3>}>
        <Posts postsData={postsData}></Posts>
      </Suspense> */}
      <PlayersRuns></PlayersRuns>
      <Suspense fallback={<h3>Total Players are coming...</h3>}>
        <PlayersEffect></PlayersEffect>
      </Suspense>
      {/* <Counter></Counter>
      <button onClick={(handleClick) => alert("i am clicked")}>
        Click me for Alert(Used Inside Arrow function)
      </button>{" "}
      <br />
      <button onClick={handleClick3}>
        Click me for Alert(Used External Arrow function)
      </button>{" "}
      <br />
      <button onClick={() => add5(10)}>Add 5</button> <br />
      <button onClick={handleClick2}>
        Click me for Alert(Used Normal function)
      </button> */}
      {/* Ekhane function k call kora jabena. call korle load er shomoy auto call hobe */}
      {/* <Alertbutton message="Wait">For Wait</Alertbutton> */}
    </>
  );
}

export default App;
