import React from "react";
import { Table } from "reactstrap";

const RankedInfo = props => {
  if (props.tab === "1") props.getRankedInfo();
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Game Mode</th>
          <th>Rank</th>
          <th>Win</th>
          <th>Losses</th>
        </tr>
      </thead>
      <tbody>{renderTableData(props)}</tbody>
    </Table>
  );
};

const renderTableData = props => {
  return props.account.rankedInfo.map(ranked => {
    const {
      leagueId,
      queueType,
      tier,
      rank,
      leaguePoints,
      wins,
      losses
    } = ranked;
    return (
      <tr key={leagueId}>
        <td>{queueType}</td>
        <td>
          {tier} {rank} - {leaguePoints} LP
        </td>
        <td>{wins}</td>
        <td>{losses}</td>
      </tr>
    );
  });
};

export default RankedInfo;
