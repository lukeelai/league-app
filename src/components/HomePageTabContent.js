import React from "react";
import { TabContent, TabPane } from "reactstrap";

//Containers
import RankedInfoContainer from "../containers/RankedInfoContainer";
import ChampionMasteryContainer from "../containers/ChampionMasteryContainer";

const HomePageTabContent = props => {
  return (
    <TabContent activeTab={props.tab}>
      <TabPane tabId="1">
        <RankedInfoContainer />
      </TabPane>
      <TabPane tabId="2">
        <ChampionMasteryContainer />
      </TabPane>
    </TabContent>
  );
};
export default HomePageTabContent;
