import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import ReservationsPage from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";

import RootLayout from "./layouts/RootLayout";

import { URLSlug } from "./config/constants";

import "./App.css";

const router = createBrowserRouter([
  {
    path: URLSlug.home,
    element: <RootLayout />,
    children: [
      {
        path: URLSlug.home,
        element: <HomePage />,
      },
      {
        path: URLSlug.about,
        element: <AboutPage />,
      },
      {
        path: URLSlug.menu,
        element: <MenuPage />,
      },
      {
        path: URLSlug.reservations,
        element: <ReservationsPage />,
      },
      {
        path: URLSlug.orderOnline,
        element: <OrderOnline />,
      },
    ],
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
