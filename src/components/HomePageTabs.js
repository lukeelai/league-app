import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const HomePageTabs = props => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={props.tab === "1" ? "active" : "inactive"}
          onClick={() => {
            props.toggle("1");
          }}
          href="#"
        >
          Ranked Info
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={props.tab === "2" ? "active" : "inactive"}
          onClick={() => {
            props.toggle("2");
          }}
          href="#"
        >
          Champion Info
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={props.tab === "3" ? "active" : "inactive"}
          onClick={() => {
            props.toggle("3");
          }}
          href="#"
        >
          Match History
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default HomePageTabs;
