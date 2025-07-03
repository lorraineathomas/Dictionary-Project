import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center app-footer">
          <small>
            Coded by Lorraine Thomas and{" "}
            <a href="https://dictionary-project-withshecodes.netlify.app/">
              hosted on Netlify
            </a>
            .{" "}
            <a href="https://github.com/lorraineathomas/Dictionary-Project">
              Open-source code
            </a>{" "}
            on Github.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
/*icon image: https://t4.ftcdn.net/jpg/05/33/89/43/360_F_533894344_MDYjJANXp9T6vmI2Z2GNABNsN2ZDEt8j.jpg */
