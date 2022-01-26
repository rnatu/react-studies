import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Home() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets((oldState) => [...oldState, "Tweet 5"]);
  }

  return (
    <>
      {tweets.map((tweet, index) => {
        return <Tweet text={tweet} key={index} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8527e6",
          border: 0,
          padding: "6px, 12px",
          color: "#FFF",
        }}
      >
        Adicionar tweet
      </button>
    </>
  );
}
