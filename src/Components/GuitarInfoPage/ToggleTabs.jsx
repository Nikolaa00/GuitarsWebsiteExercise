import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 1378px;
  height: 67px;
  color: #ff8a5d;

  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 24.15px;
  font-style: normal;
  line-height: normal;
`;

const Tab = styled.div`
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#FF8A5D" : "#9292A3")};
  border-bottom: ${({ active }) =>
    active ? "5px solid #FF8A5D" : "5px solid transparent"};
  cursor: pointer;
  padding: 12px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #ff8a5d;
  }

  &:first-child {
    width: 711px;
  }
  &:last-child {
    width: 667px;
  }
`;

export default function ToggleTabs({ activeTab, setActiveTab }) {
  return (
    <TabWrapper>
      <Tab active={activeTab === "spec"} onClick={() => setActiveTab("spec")}>
        Specification
      </Tab>
      <Tab active={activeTab === "who"} onClick={() => setActiveTab("who")}>
        Who plays it?
      </Tab>
    </TabWrapper>
  );
}
