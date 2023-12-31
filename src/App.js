import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { UrlListContext } from "./contexts/AppContext";
import PropertyList from "./Test";
import { getDataPromise } from "./crud/manipulateData";
import TabExamplePointing from "./components/Tabs";
import './styles.scss';

function App() {
  const [urlsList, setUrlsList] = useState([]);
  const [filteredUrls, setFilteredUrls] = useState(urlsList);
  const [urlText, setUrlText] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [currOption, setCurrOption] = useState("tags");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getUrlsList();
  }, []);

  const getUrlsList = async () => {
    try {
      const data = await getDataPromise();
      setUrlsList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <UrlListContext.Provider
        value={{
          urlsList,
          setUrlsList,
          filteredUrls,
          setFilteredUrls,
          urlText,
          setUrlText,
          showAdd,
          setShowAdd,
          currOption,
          setCurrOption,
          // tags,
          // setTags,
          inputValue,
          setInputValue,
          getUrlsList,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<TabExamplePointing />} path="/" />
            <Route element={<PropertyList />} path="/addUrls" />
          </Routes>
        </BrowserRouter>
      </UrlListContext.Provider>
    </>
  );
}

export default App;
export const AppContext = createContext();
