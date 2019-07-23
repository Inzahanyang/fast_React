import React from "react";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "300px"
      }}
    >
      <button>
        <a href={"/signin"}>Go Signin</a>
      </button>
    </div>
  );
}
