import React from "react";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { addRankedInfo } from "../actions/account";

//Components
import RankedInfo from "../components/RankedInfo";

//Variables
const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

export class RankedInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.getRankedInfo = this.getRankedInfo.bind(this);
  }

  getRankedInfo = () => {
    if (this.props.tab === "1" && this.props.account.accountId) {
      const summonerID = `/lol/league/v4/entries/by-summoner/${this.props.account.id}/?api_key=${apiKey}`;
      axios(summonerID)
        .then(response => {
          if (response.data.length > 0) this.props.addRankedInfo(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <RankedInfo
        {...this.props}
        getRankedInfo={this.getRankedInfo}
        key={this.props.account.id}
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
  { addRankedInfo }
)(RankedInfoContainer);
