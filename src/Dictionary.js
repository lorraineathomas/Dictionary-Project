import react, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults = response.data;
    //let def = document.querySelector(".definition");
    //let defined = response.data[0].meanings[0].definitions[0].definition;
    //def.innerHTML = defined;
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-center">DICTIONARY</h1>
      <form onSubmit={search} className="text-center">
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
        <Results results={results} />
      </form>
    </div>
  );
}
