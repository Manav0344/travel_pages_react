import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./common-componets/Header";
import Footer from "./common-componets/Footer";
import Home from "./componets/Home";
import About from "./componets/About";
import Packages from "./componets/Packages";
import Destinations from "./componets/Destinations";
import Guide from "./componets/Guide";
import Gallery from "./componets/Gallery";
import Contact from "./componets/Contact";

// Layout with Header and Footer
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />

        },
        {
          path: "/destinations",
          element: <Destinations />
        },
        {
          path: "/travelpackages",
          element: <Packages />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/guide",
          element: <Guide />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
