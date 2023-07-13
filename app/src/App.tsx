import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { routes as appRoutes } from "./routes";
import { theme } from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Box height="100vh" display="flex" flexDirection="column">
            <Router>
              <Routes>
                {appRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Router>
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
