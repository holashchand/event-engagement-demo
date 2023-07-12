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
import ToolBar from "./layout/AppBar";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path={pageRoutes.HOME} element={<HomePage />} />,
//   ),
// );

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Box height="100vh" display="flex" flexDirection="column">
            <Router>
              <ToolBar/>
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
