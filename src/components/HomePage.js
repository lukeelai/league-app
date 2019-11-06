import React from "react";
import { InputGroup, InputGroupText, Input } from "reactstrap";

const HomePage = props => {
  return (
    <div>
      <InputGroup className="searchbox">
        <InputGroupText>search</InputGroupText>
        <Input
          placeholder={
            props.account.id === "error"
              ? "Please enter a valid Summoner Name"
              : "Summoner Name..."
          }
          type="text"
          onKeyPress={props.getSummoner}
        />
      </InputGroup>
      <h1>{props.account.name.length < 1 ? "" : props.account.id}</h1>
    </div>
  );
};

export default HomePage;
