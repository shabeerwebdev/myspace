import React from "react";
import { Tab } from "semantic-ui-react";
import AddSearchURLs from "../pages/AddSearchURLs";
import "../styles.scss";
const panes = [
  {
    menuItem: "Tab 1",
    render: () => (
      <Tab.Pane attached={false}>
        <AddSearchURLs />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const TabPointing = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default TabPointing;
