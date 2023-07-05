import { ContextMain } from "./contexts/ContextMain";
import CardType from "./components/cardType/CardType";
import Search from "./components/search/Search";
import MainTable from "./components/table/MainTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextMain>
        <CardType />
        <Search />
        <MainTable />
      </ContextMain>
    </div>
  );
}

export default App;
