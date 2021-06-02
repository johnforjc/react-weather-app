import React from "react";

const Infos = ({ title, value }) => {
  return (
    <div className="infochild">
      <div className="label-info">
        <h4>{title}</h4>
      </div>
      <div className="label-info">
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default Infos;
