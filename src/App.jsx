// import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import AnimalsCardList from "./components/AnimalsCardList";
import AnimalDataContexts from "./AnimalDataContext";
import Header from "./components/Header";
import FriedsCount from "./FriendsCountContext";

const URL = "https://learnwebcode.github.io/pet-adoption-data/pets.json";

function App() {
  const [friendsInCart, setFriendsInCart] = useState(5);
  const { data, loading, error } = useFetch(URL);
  console.log(friendsInCart);
  if (loading) return <h1>Loading...wait</h1>;
  if (error) console.log(error);

  return (
    <AnimalDataContexts.Provider value={data}>
      <FriedsCount.Provider value={{ friendsInCart, setFriendsInCart }}>
        <div className="app-grid">
          <Header />
          <AnimalsCardList />
        </div>
      </FriedsCount.Provider>
    </AnimalDataContexts.Provider>
  );
}

export default App;
// const [animcalData, setAnimalData] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await fetch(URL);
//     result.json().then((json) => {
//       // console.log(json);
//       setAnimalData(json);
//     });
//   };
//   fetchData();
// }, []);
// console.log(animcalData);
