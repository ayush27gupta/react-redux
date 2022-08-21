import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/Main";
import { store } from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
