import React from "react";
import Cards from "./common/Cards";

const Home = () => {
  return (
    <div style={{margin: '10px'}}>
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.5rem",
          alignItems: "center",
          textAlign: "center",
          color: "#cb4b4b",
        }}
      >
        Learning Projects
      </div>
      <Cards label={"Drag and Drop Image"} url={"/drag-drop-image"} />
    </div>
  );
};

export default Home;
