import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT -- PAGES ROUTER");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIt")} style={{ margin: "15" }}>
        PressMe
      </button>
    </div>
  );
};

export default Community;
