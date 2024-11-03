import { FormBuilder, Navbar } from "./containers";
import ResponsiveGrid from "./containers/ResponsiveGrid";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <FormBuilder />
      {/* <ResponsiveGrid /> */}
    </Provider>
  );
}

export default App;
