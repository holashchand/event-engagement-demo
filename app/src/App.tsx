import { CssBaseline } from "@mui/material";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { pageRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={pageRoutes.HOME} element={<HomePage />} />,
  ),
);

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
