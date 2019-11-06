import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { updateSummoner } from "../actions/account";
import { setActiveTab } from "../actions/tab";

//Components
import HomePage from "../components/HomePage";

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;
const freeChampsUri = `/lol/platform/v3/champion-rotations/?api_key=${apiKey}`;

export class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.getSummoner = this.getSummoner.bind(this);
  }

  toggle(tab) {
    if (this.props.tab !== tab) this.props.setActiveTab(tab);
  }

  getSummoner = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      e.preventDefault();
      const summonerName = encodeURIComponent(e.target.value.trim());
      const summonerID = `/lol/summoner/v4/summoners/by-name/${summonerName}/?api_key=${apiKey}`;
      axios(summonerID)
        .then(response => {
          this.props.updateSummoner(response.data.id, response.data);
        })
        .catch(error => {
          console.log(error);
          this.props.updateSummoner("error", { id: "error" });
        });
      e.target.value = "";
    }
  };
  render() {
    return (
      <HomePage
        {...this.props}
        getSummoner={this.getSummoner}
        toggle={this.toggle}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account,
    tab: state.tab
  };
};

export default connect(
  mapStateToProps,
  { updateSummoner, setActiveTab }
)(HomePageContainer);
