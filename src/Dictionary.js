import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0]);
    let resultCall = document.querySelector(".results");
    resultCall.innerHTML = `<strong>${response.data[0].word}</strong><br/>${response.data[0].meanings[0].partOfSpeech}<br/>${response.data[0].phonetic}<br/>${response.data[0].meanings[0].definitions[0].definition}`;
  }

  function search(event) {
    event.preventDefault();
    // Documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key={73a673doafc73bccb4ff04ct60632486}`;
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
      </form>
      <div className="results"></div>
    </div>
  );
}
