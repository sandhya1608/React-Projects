import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({label, url}) => {
  const naigate = useNavigate();
  return (
    <div className="card" onClick={() => naigate(url)}>
      <h4>{label}</h4>
    </div>
  );
};

export default Cards;
