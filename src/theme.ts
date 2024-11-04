import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Use Poppins as the default font
  },
  /*

  we can override this styles individually here 
  we can also extend this if we want

    Typography
    Palette (Colors)
    Components (Individual component styles)
    Spacing
    Breakpoints
    Shadows
    Shape
    Transitions
    Z-Index
    
  */
});

export default theme;
