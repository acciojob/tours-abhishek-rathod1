import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
import "../styles/App.css";
// import { data } from "cypress/types/jquery";
import data from "./data.js";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours =  () => {
    setLoading(true);
    try {
      setLoading(true);
      setTimeout(() => {
        setTours(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main id="main">
        <div className="title">
          <h2>No tours left</h2>
          <button onClick={fetchTours} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main id="main">     

      <Tours tours={tours} removeTour={removeTour}/>
      <button onClick={fetchTours} className="btn">
        Refresh
      </button>
    </main>
  );
};
export default App;
