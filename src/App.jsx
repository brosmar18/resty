import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Results from "./Components/Results";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.scss";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
const queryClient = new QueryClient();

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!requestParams.url) return;

      setIsLoading(true);
      try {
        const response = await fetch(requestParams.url, {
          method: requestParams.method,
          headers: {
            "Content-Type": "application/json",
          },
          body:
            requestParams.method === "GET" || requestParams.method === "DELETE"
              ? null
              : JSON.stringify(requestParams.body),
        });

        if (!response.ok) throw new Error("Network response was not ok.");

        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [requestParams]);


  const Layout = () => {
    return (
      <div className="page">
        <Header />
        <div className="containers">
          <div className="menu__container">
            <Sidebar />
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
          element: <Home data={data} setData={setData} requestParams={requestParams} setRequestParams={setRequestParams} isLoading={isLoading} />,
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
};

export default App;
