import { Provider } from "react-redux";
import { Stack } from "@mui/material";

import { FormBuilder, Navbar } from "./containers";
import { store } from "./store/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
