import { FormBuilder, Navbar } from "./containers";
import ResponsiveGrid from "./containers/ResponsiveGrid";
import { store } from "./store/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      sx={{
        height: "100vh",
      }}
    >
      <Provider store={store}>
        <Navbar />

        <FormBuilder />
      </Provider>
    </Stack>
  );
}

export default App;
