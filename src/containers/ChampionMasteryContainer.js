import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { addChampionMastery } from "../actions/account";

//Components
import ChampionMastery from "../components/ChampionMastery";

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

export class ChampionMasteryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getChampionMastery = this.getChampionMastery.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.account.championMastery.length === 0 ||
      prevProps.account.id !== this.props.account.id
    ) {
      this.getChampionMastery();
    }
  }

  getChampionMastery = () => {
    if (this.props.tab === "2" && this.props.account.id) {
      const summonerID = `/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.props.account.id}/?api_key=${apiKey}`;
      axios(summonerID)
        .then(response => {
          this.props.addChampionMastery(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return <ChampionMastery {...this.props} />;
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
  { addChampionMastery }
)(ChampionMasteryContainer);
