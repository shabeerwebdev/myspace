import React, { useContext } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { UrlListContext } from "../contexts/AppContext";

const customInputStyle = {
  width: "100%",
};

const UrlInput = () => {
  const {
    urlsList,
    urlText,
    setUrlText,
    setCurrOption,
    setShowAdd,
    currOption,
  } = useContext(UrlListContext);

  const onUrlTextChange = (e, { value }) => {
    setUrlText(value);
    urlsList.map((item) => item.url).includes(value) || value === ""
      ? setShowAdd(false)
      : setShowAdd(true);
  };

  const options = [
    { key: "http", text: "search by http", value: "http" },
    { key: "tags", text: "search by tags", value: "tags" },
  ];

  const onOptionChange = (e, { value }) => {
    return setCurrOption(value);
  };

  const defaultValue =
    options[options.findIndex((option) => option.key === currOption)].key;

  return (
    <>
      <Input
        value={urlText}
        onChange={onUrlTextChange}
        style={customInputStyle}
        label={
          <Dropdown
            onChange={onOptionChange}
            defaultValue={defaultValue}
            options={options}
          />
        }
        labelPosition="left"
        placeholder="Search or Add when not found"
      />
    </>
  );
};
export default UrlInput;
