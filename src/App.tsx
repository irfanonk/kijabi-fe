import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: 0,
          background: "#1EA4CE",
        },
        text: {
          background: "#F2F0FD",
          color: "#1EA4CE",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1EA4CE",
    },
    text: {
      primary: "#525252",
      secondary: "#525252",
    },
  },
  typography: {
    fontFamily: "Open-sans",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
