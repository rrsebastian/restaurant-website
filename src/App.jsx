import React from "react";
import {
  createHashRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import History from "./pages/History.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import { AppProvider } from "./AppContext.jsx";
import "./App.css";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/history",
      element: <History />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouterProvider>
    </AppProvider>
  );
}

export default App;

// Now you can import and render AppRouter in your main file (e.g., index.jsx)
// ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
