import React from "react";
import { Table } from "reactstrap";

const ChampionMastery = props => {
  // props.getChampionMastery();
  return (
    <Table>
      <thead>
        <tr>
          <th>Champion ID</th>
          <th>Champion Level</th>
          <th>Champion Points</th>
        </tr>
      </thead>
      <tbody>{renderTableData(props)}</tbody>
    </Table>
  );
};

const renderTableData = props => {
  return props.account.championMastery.map(champion => {
    const { championId, championLevel, championPoints } = champion;
    return (
      <tr key={championId}>
        <td>{championId}</td>
        <td>{championLevel}</td>
        <td>{championPoints}</td>
      </tr>
    );
  });
};
export default ChampionMastery;
