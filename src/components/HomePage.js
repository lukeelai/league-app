import React from "react";
import { InputGroup, InputGroupText, Input, Badge } from "reactstrap";

//Components
import HomePageTabs from "./HomePageTabs";
import HomePageTabContent from "./HomePageTabContent";

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
      <h2 className="text-center">
        <Badge color="primary">
          {props.account.name.length < 1 || props.account.id === "error"
            ? ""
            : props.account.name}
        </Badge>
      </h2>
      <HomePageTabs {...props} />
      <HomePageTabContent {...props} />
    </div>
  );
};

export default HomePage;
