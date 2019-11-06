import React from "react";
import axios from "axios";

const HomePage = () => {
  getFreeChamps();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;

const uri = `/lol/platform/v3/champion-rotations/?api_key=${process.env.REACT_APP_LEAGUE_API_KEY}`;
const getFreeChamps = () => {
  axios(uri)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
