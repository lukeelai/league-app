import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { updateSummoner } from "../actions/account";
//Components
import HomePage from "../components/HomePage";

//Variables
const freeChampsUri = `/lol/platform/v3/champion-rotations/?api_key=${process.env.REACT_APP_LEAGUE_API_KEY}`;

export class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  getSummoner = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      const summonerName = encodeURIComponent(e.target.value.trim());
      const summonerID = `/lol/summoner/v4/summoners/by-name/${summonerName}/?api_key=${process.env.REACT_APP_LEAGUE_API_KEY}`;
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
    return <HomePage {...this.props} getSummoner={this.getSummoner} />;
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  };
};

export default connect(
  mapStateToProps,
  { updateSummoner }
)(HomePageContainer);
