import { useEffect, useState } from "react";
import Commit from "./components/Commit";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const url = "https://api.github.com/repos/jdgc2304/github-commit-viewer/commits";
  const currentYear = new Date();

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
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold title">GitHub Commit Viewer</h1>
        {data.map((item) => (
          <Commit key={item.node_id} item={item} />
        ))}
      </div>

      <hr className="mt-4 border-gray-700" />

      <footer className="my-4 text-center text-white">
        Copyright © <span>{currentYear.getFullYear()}</span>{" "}
        <a
          href="https://www.linkedin.com/in/jdgc2304-548a30205/"
          className="text-blueGray-500 hover:text-blue-500"
        >
          Juan Guarimán
        </a>
      </footer>
    </>
  );
}

export default App;
