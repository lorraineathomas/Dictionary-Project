export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>; return{" "}
        <div className="Results">Hello from results</div>;
      </div>
    );
  } else {
    return null;
  }
}
