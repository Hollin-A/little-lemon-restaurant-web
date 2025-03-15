import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";

import HomePage from "./pages/HomePage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
