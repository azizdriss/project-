import React from "react";
import Mediacard from "./card";

const Page1 = () => {
  return (
    <div>
      <h1>container</h1>
      <br />
      <span>
        <Mediacard style={{ display: "inline" }} />
        <Mediacard style={{ display: "inline" }} />
      </span>
    </div>
  );
};
export default Page1;
