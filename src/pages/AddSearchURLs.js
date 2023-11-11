import React, { useContext } from "react";
import UrlInput from "../components/Input";
import UrlsList from "../components/List";
import { Button } from "semantic-ui-react";
import { UrlListContext } from "../contexts/AppContext";
import { parseURL } from "../helpers/parseUrl";
import generateUniqueID from "../helpers/generateId";
import { searchByTags, searchByUrl } from "../helpers/searchUrl";
import { addDataPromise } from "../crud/manipulateData";

const AddSearchURLs = () => {
  const { urlsList, urlText, setUrlText, showAdd, currOption, getUrlsList } =
    useContext(UrlListContext);

  const newUrlEntry = () => {
    // Parse the URL using the `parseURL` function
    const parsedUrl = parseURL(urlText);

    if (parsedUrl) {
      // Create a new URL object with parsed properties
      const newUrl = {
        id: generateUniqueID(),
        url: urlText,
        domain: parsedUrl.domain,
        path: parsedUrl.path,
        protocol: parsedUrl.protocol,
        favicon: parsedUrl.favicon,
        keywords: [],
      };
      // Add the new URL object to the URLs list
      // setUrlsList([...urlsList, newUrl]);
      setUrlText("");
      return newUrl;
    }
    setUrlText("");
  };

  const filteredItems =
    currOption === "tags"
      ? searchByTags(urlsList, urlText)
      : searchByUrl(urlsList, urlText);

  const addNewUrl = () => {
    addDataPromise(newUrlEntry())
      .then(() => getUrlsList())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <UrlInput />
        {showAdd && <Button onClick={addNewUrl}>Add</Button>}
      </div>
      {filteredItems.map((item) => (
        <UrlsList urlsList={item} />
      ))}
    </>
  );
};

export default AddSearchURLs;
