import React from "react";
import Tags from "./Tags";
import { List } from "semantic-ui-react";
import "../styles.scss";

const UrlsList = ({ urlsList }) => {
  return (
    <>
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <div className="urlHead">
              <img className="urlImage" src={urlsList.favicon} alt="favicon" />
              <List.Header className="urlStyle" as="a">
                {urlsList.url}
              </List.Header>
            </div>
            <Tags keywords={urlsList.keywords} dbId={urlsList.dbId} />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

export default UrlsList;
