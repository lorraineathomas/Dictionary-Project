import react from "react";
import Definition from "./Definition.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.defintions.map(function (definition, index) {
        return (
          <div key={index}>
            <Definition definition={definition} />
            {definition.defintion}
            <br />
            {definition.example}
          </div>
        );
      })}
    </div>
  );
}
