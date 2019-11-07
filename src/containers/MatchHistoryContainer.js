import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { addMatches } from "../actions/matches";

//Components
import MatchHistory from "../components/MatchHistory";

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

export class MatchHistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getMatchHistory = this.getMatchHistory.bind(this);
  }

  getMatchHistory = () => {
    if (this.props.account.accountId) {
      const summonerID = `/lol/match/v4/matchlists/by-account/${this.props.account.accountId}/?api_key=${apiKey}`;
      axios(summonerID)
        .then(response => {
          if (response.data.matches.length > 1)
            this.props.addMatches(response.data.matches);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <MatchHistory {...this.props} getMatchHistory={this.getMatchHistory} />
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account,
    matches: state.matches,
    tab: state.tab
  };
};

export default connect(
  mapStateToProps,
  { addMatches }
)(MatchHistoryContainer);
