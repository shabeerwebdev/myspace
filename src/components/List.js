import React from "react";
import Tags from "./Tags";
import { List } from "semantic-ui-react";
import '../styles.scss';

const UrlsList = ({ urlsList }) => {
  function getStringFromUrl(url) {
    const parts = url.split('.');
    console.log(parts[0], 'nanu');
    const lastPart = parts[0] !== 'www' ? `${parts[0]}.${parts[1]}` : parts[1];
    return `${lastPart}${urlsList.path} `;
}
console.log(urlsList.domain,'urlsList.domain');
const result = getStringFromUrl(urlsList.domain);

  return (
    <>
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <div className="urlHead">
              <img className="urlImage" src={urlsList.favicon} />
              <List.Header className="urlStyle" as="a">
                {urlsList.url}
              </List.Header>
            </div>
            <Tags
              keywords={urlsList.keywords}
              dbId={urlsList.dbId}
            />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

export default UrlsList;
