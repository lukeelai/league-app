import React from "react";

const RankedInfo = props => {
  if (props.account.id) props.getRankedInfo();
  return <div>Ranked Info</div>;
};

export default RankedInfo;
