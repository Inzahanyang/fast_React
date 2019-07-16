import React from "react";
import queryString from "query-string";

export default function About({ location }) {
  //   const searchParams = new URLSearchParams(location.search);
  //   const name = searchParams.get("name");

  //   console.log(name);

  const query = queryString.parse(location.search);
  console.log(query);
  const name = query.name;
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>about {name} ..</p>}
    </div>
  );
}
