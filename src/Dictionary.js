import react, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
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
    </div>
  );
}
