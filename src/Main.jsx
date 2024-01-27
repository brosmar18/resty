import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import App from "./Pages/App/App";
import History from "./Pages/History";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./Main.scss";
import Home from "./Pages/Home";
const queryClient = new QueryClient();

function Main() {
  const Layout = () => {
    return (
      <div className="page">
        <Header />
        <div className="containers">
          <div className="menu__container">
            <Menu />
          </div>
          <div className="content__container">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/app",
          element: <App />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Main;
