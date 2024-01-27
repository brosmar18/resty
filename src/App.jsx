import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Pages/History";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const callApi = (newRequestParams) => {
    setIsLoading(true);
    setRequestParams(newRequestParams);

    if (newRequestParams.url) {
      fetch(newRequestParams.url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((newData) => {
          setData(newData);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with the fetch operation: ",
            error
          );
          setData(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/", // Root path
      element: (
        <div data-testid="app" className="app">
          <Header />
          <Form handleApiCall={callApi} />
          <Results
            data={data}
            requestParams={requestParams}
            isLoading={isLoading}
          />
          <Footer />
        </div>
      ),
      children: [
        {
          path: "history",
          element: <History />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
