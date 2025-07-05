import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    // Documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key={73a673doafc73bccb4ff04ct60632486}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="text-center">DICTIONARY</h1>
        <form onSubmit={search} className="text-center">
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <input type="submit" className="button" value="Search" />
        </form>
        <div className="results">
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
