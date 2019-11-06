import React from "react";
import { TabContent, TabPane } from "reactstrap";

//Components
import ChampionInfoPage from "./ChampionInfo";
import RankedInfoPage from "./RankedInfo";

//Containers

const HomePageTabContent = props => {
  return (
    <TabContent activeTab={props.tab}>
      <TabPane tabId="1">
        <ChampionInfoPage />
      </TabPane>
      <TabPane tabId="2">
        <RankedInfoPage />
      </TabPane>
    </TabContent>
  );
};
export default HomePageTabContent;
