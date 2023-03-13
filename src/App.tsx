import Routing from "routes";
import { FilterMenuContext } from "helpers/MenuContext";

function App() {
  return (
    <FilterMenuContext>
      <div className="App">
        <Routing />
      </div>
    </FilterMenuContext>
  );
}

export default App;
