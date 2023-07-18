import React, { useContext, useState } from "react";
import AnimalDataContexts from "../AnimalDataContext";
import FriedsCount from "../FriendsCountContext";
import AdoptForm from "./AdoptForm";
const AnimalCard = () => {
  const data = useContext(AnimalDataContexts);
  const { setFriendsInCart } = useContext(FriedsCount);
  const [petObj, setPetObj] = useState({});
  const [adoptFormShowHide, setAdoptFormShowHide] = useState(false);
  const adoptHandle = (obj) => {
    // e.preventDefault();
    setPetObj(obj);
    setFriendsInCart((val) => val + 1);
    setAdoptFormShowHide(true);
  };
  return (
    <>
      {/* Adopt form start..          */}
      {adoptFormShowHide && (
        <AdoptForm
          setAdoptFormShowHide={setAdoptFormShowHide}
          petObj={petObj}
        />
      )}
      {/* Adopt form ends.. */}
      {data &&
        data.map((pet) => (
          <div key={pet.id} className="pet-card">
            <div className="pet-card-text">
              <h3> {pet.name}</h3>
              <small>
                <span className="age"> 3 Years old </span> -
                <span className="species"> {pet.species} </span>
              </small>
              <p className="para-detail">{pet.description}</p>
              {/* <a href="#" className="primary-btn">
                Adopt <span className="name"> {pet.name} </span>
              </a> */}
              <button
                onClick={() =>
                  adoptHandle({ petname: pet.name, petphoto: pet.photo })
                }
                className="primary-btn"
              >
                Adopt <span className="name">{pet.name}</span>
              </button>
            </div>
            <div className="pet-card-photo">
              <img
                src={pet.photo}
                //   src="https://learnwebcode.github.io/pet-adoption-data/photos/meowsalot.webp"
                // alt="A cat named Meowsalot"
                alt={`A ${pet.species} named ${pet.name}`}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default AnimalCard;
