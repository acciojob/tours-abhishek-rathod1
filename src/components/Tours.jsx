import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  let toursData = tours;
  console.log("tours:", toursData);

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div  className="cardContainer">
        {toursData.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
