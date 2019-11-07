import React from "react";
import { TabContent, TabPane } from "reactstrap";

//Containers
import RankedInfoContainer from "../containers/RankedInfoContainer";
import ChampionMasteryContainer from "../containers/ChampionMasteryContainer";
import MatchHistoryContainer from "../containers/MatchHistoryContainer";

const HomePageTabContent = props => {
  return (
    <TabContent activeTab={props.tab}>
      <TabPane tabId="1">
        <RankedInfoContainer />
      </TabPane>
      <TabPane tabId="2">
        <ChampionMasteryContainer />
      </TabPane>
      <TabPane tabId="3">
        <MatchHistoryContainer />
      </TabPane>
    </TabContent>
  );
};
export default HomePageTabContent;
