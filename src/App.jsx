import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const url = "https://api.github.com/repos/jdgc2304/github-commit-viewer/commits";

  async function fetchCommits(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error while fetching the commits", error);
    }
  }

  useEffect(() => {
    fetchCommits(url);
  }, []);

  return <button onClick={() => console.log(data)}>Show commits</button>;
}

export default App;
