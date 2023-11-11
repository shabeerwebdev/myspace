import React, { useContext, useState } from "react";
import { Icon, Input, Label } from "semantic-ui-react";
import { UrlListContext } from "../contexts/AppContext";
import { updateKeywordsPromise } from "../crud/manipulateData";
import "../styles.scss";
const customLabelStyle = {
  marginBottom: "4px",
  marginRight: "4px",
};

const customInputStyle = {
  marginLeft: "5px",
  fontSize: "12px",
  marginBottom: "4px",
};

function Tags({ keywords = [], dbId }) {
  const { urlText, getUrlsList } = useContext(UrlListContext);
  const [inputValue, setInputValue] = useState("");

  const handleTagAction = (tag, action) => {
    if (action === "add" && inputValue.trim() !== "") {
      updateKeywordsPromise(dbId, tag, "add")
        .then(() => setInputValue(""))
        .then(() => getUrlsList());
    } else if (action === "remove") {
      updateKeywordsPromise(dbId, tag, "remove")
        .then(() => setInputValue(""))
        .then(() => getUrlsList());
    }
  };

  return (
    <div className="tagsStyle">
      {Array.from(keywords).map((tag) => (
        <Label
          style={customLabelStyle}
          key={tag}
          as="a"
          color={urlText && tag.includes(urlText) && "pink"}
          size="mini"
        >
          {tag}
          <Icon name="delete" onClick={() => handleTagAction(tag, "remove")} />
        </Label>
      ))}
      <Input
        style={customInputStyle}
        transparent
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleTagAction(e.target.value, "add");
          }
        }}
        placeholder={"Add tags"}
      />
    </div>
  );
}

export default Tags;
