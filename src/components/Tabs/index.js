import React from "react";
import PropTypes from "prop-types";
import { StyledTab, StyledTabs } from "./Tabs.styled";

const Tabs = ({ tabs, onTabClick }) => (
  <StyledTabs>
    {tabs.map(({ id, isActive, label }) => (
      <StyledTab key={id} isActive={isActive} onClick={() => onTabClick(id)}>
        {label}
      </StyledTab>
    ))}
  </StyledTabs>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isActive: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
  onTabClick: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;
