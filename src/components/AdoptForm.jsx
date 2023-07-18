import React, { useState } from "react";
import "../FormStyle.css";

function AdoptForm({ setAdoptFormShowHide, petObj }) {
  console.log(petObj);
  const { petphoto, petname } = petObj;
  const [name, setName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(`${name} is submitted..`);
  };
  const cancelHandle = (e) => {
    e.preventDefault();
    setAdoptFormShowHide(false);
  };
  return (
    <form className="adopt-form">
      <h3>{`Hi, I am ${petname}. Thanks For Adopting me.. `}</h3>
      <div className="form-pet-info">
        <div className="petpic">
          <img src={petphoto} alt="" />
        </div>
      </div>
      <div className="form-owner-info">
        <label>
          {" "}
          <input
            className="formInput"
            placeholder="Your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          <textarea
            className="formInput"
            name=""
            id=""
            cols="40"
            rows="5"
            placeholder="About YourSelf"
          ></textarea>
        </label>
      </div>
      <div className="adopt-form-buttons">
        <button className="primary-btn" onClick={submitHandle}>
          Adopt
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="primary-btn"
          onClick={cancelHandle}
        >
          Later
        </button>
      </div>
    </form>
  );
}

export default AdoptForm;
