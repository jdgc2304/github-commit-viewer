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

  return (
    <div className="container">
      <h1 className="text-3xl">GitHub Commit Viewer</h1>
      <ul>
        {data.map((item) => (
          <li>
            {`Message: ${item.commit.message} Date: ${item.commit.author.date} Sha: ${item.sha} `}
            {`Name: ${item.commit.author.name} Mail: ${item.commit.author.email}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
