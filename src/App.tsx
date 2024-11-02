import { FormBuilder, Navbar } from "./containers";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <FormBuilder />
    </Provider>
  );
}

export default App;
