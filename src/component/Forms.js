import React from "react";
import { useState } from "react";

const Form = ({ getInfo }) => {
  const [Location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Location);
    getInfo(Location);
  };

  return (
    <div className="form-city">
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="City">Enter City</label>
        <input type="text" name="City" placeholder="London, UK" value={Location} onChange={(e) => setLocation(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
