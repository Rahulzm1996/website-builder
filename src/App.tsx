import { FormBuilder, Navbar } from "./containers";
import ResponsiveGrid from "./containers/ResponsiveGrid";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";

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
