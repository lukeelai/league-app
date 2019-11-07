import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions

//Components

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

export class MatchHistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getMatchHistory = this.getMatchHistory.bind(this);
  }

  getMatchHistory = () => {};

  render() {
    return <div>Match History</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect()(MatchHistoryContainer);
