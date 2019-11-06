import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions

//Components
import RankedInfo from "../components/RankedInfo";

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

export class RankedInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getRankedInfo = () => {
    if (this.props.tab === "1") {
      const summonerID = `/lol/league/v4/entries/by-summoner/${this.props.account.id}/?api_key=${apiKey}`;
      axios(summonerID)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  render() {
    return <RankedInfo {...this.props} getRankedInfo={this.getRankedInfo} />;
  }
}

const mapStateToProps = state => {
  return {
    account: state.account,
    tab: state.tab
  };
};

export default connect(mapStateToProps)(RankedInfoContainer);
