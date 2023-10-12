import React from "react";

export default function Commit({ item }) {
  const date = new Date(item.commit.author.date);
  const commit = item.commit;
  const committer = item.committer;
  const sha = item.sha;

  return (
    <>
      {/* Avatar image */}
      <div>
        <a href={committer.html_url} target="_blank">
          <img src={committer.avatar_url} alt="Avatar" className="h-16 w-16 rounded-full" />
        </a>
      </div>

      {/* Date of commit */}
      <div>
        <p>{date.toLocaleDateString("en", { year: "numeric", month: "short" })}</p>
        <p>{date.toLocaleDateString("en", { weekday: "long" })}</p>
      </div>

      {/* Author */}
      <div>
        <p>{commit.author.name}</p>
        <p>{commit.author.email}</p>
      </div>

      {/* Commit info*/}
      <div>
        <p>{commit.message}</p>
        <p>
          <a
            href={`https://github.com/jdgc2304/github-commit-viewer/commit/${sha}`}
            target="_blank"
          >
            {sha}
          </a>
        </p>
      </div>
    </>
  );
}
