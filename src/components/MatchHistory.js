import React from "react";
import { Table } from "reactstrap";

const MatchHistory = props => {
  if (props.tab === "3") props.getMatchHistory();
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Game Mode</th>
          <th>Champion</th>
          <th>Time</th>
          <th>Role</th>
          <th>Lane</th>
        </tr>
      </thead>
      <tbody>{renderTableData(props)}</tbody>
    </Table>
  );
};
const renderTableData = props => {
  return props.matches.map(match => {
    const { gameId, champion, timestamp, role, lane } = match;
    return (
      <tr key={gameId}>
        <td>{gameId}</td>
        <td>{champion}</td>
        <td>{new Date(timestamp).toLocaleDateString()}</td>
        <td>{role}</td>
        <td>{lane}</td>
      </tr>
    );
  });
};
export default MatchHistory;
