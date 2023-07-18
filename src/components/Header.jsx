// import { useContext } from "react";
// import FriedsCount from "../FriendsCountContext";
const Header = () => {
  // const { friendsInCart } = useContext(FriedsCount);
  return (
    <>
      <div className="hero">
        <h1>WelCome To Pet-book</h1>
        <h2>Learn and adopt friends</h2>
      </div>
      {/* <button className="primary-btn friends-btn">
        Friends in List :{" "}
        <span className="friends-number"> {friendsInCart}</span>
      </button> */}
    </>
  );
};

export default Header;
