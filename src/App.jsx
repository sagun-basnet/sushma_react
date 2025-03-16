import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const routerLayout = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/service", element: <Service /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={routerLayout} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer /> */}
    </>
  );
};

export default App;
