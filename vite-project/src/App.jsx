import { useEffect, useState } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("onMount");
  }, []); // this only happens when we call the resourceType for example

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>

      <h1>{resourceType}</h1>
    </div>
  );
}
