import { Provider } from "react-redux";
import { Stack } from "@mui/material";

import { FormBuilder, Navbar } from "./containers";
import { store } from "./store/store";

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
