import React from "react";

export default function Commit({ item }) {
  const date = new Date(item.commit.author.date);
  const commit = item.commit;
  const committer = item.committer;
  const sha = item.sha;

  return (
    <div className="flex items-center bg-white py-4 border-x-8 border-blue-500 commit">
      {/* Avatar image */}
      <div className="pl-4">
        <a href={committer.html_url} target="_blank">
          <img src={committer.avatar_url} alt="Avatar" className="h-16 w-16 rounded-full avatar" />
        </a>
      </div>

      {/* Date of commit */}
      <div className="flex flex-col justify-center items-center px-4">
        <p className="font-extrabold text-lg text-gray-900 italic date">
          {date.toLocaleDateString("en", { year: "numeric", month: "short" })}
        </p>
        <p className="text-md text-gray-700 italic">
          {date.toLocaleDateString("en", { weekday: "long" })}
        </p>
      </div>

      {/* Author */}
      <div className="flex flex-col px-4 border-x-2 border-gray-200 hidden md:block">
        <p className="font-extrabold text-md text-gray-900 italic">{commit.author.name}</p>
        <p className="text-sm text-gray-700 italic">{commit.author.email}</p>
      </div>

      {/* Commit info*/}
      <div className="px-4 break-all">
        <p className="font-extrabold text-md text-gray-900">{commit.message}</p>
        <p className="text-sm font-bold text-blue-500">
          <a
            href={`https://github.com/jdgc2304/github-commit-viewer/commit/${sha}`}
            className="hover:text-blue-800"
            target="_blank"
          >
            {sha}
          </a>
        </p>
      </div>
    </div>
  );
}
