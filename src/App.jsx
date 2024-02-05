import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useReducer, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import History from "./Pages/History";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import "./App.scss";

const queryClient = new QueryClient();

const initialState = {
  data: null,
  requestParams: {},
  isLoading: false,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_REQUEST_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, requestParams, isLoading, history } = state;

  useEffect(() => {
    const fetchData = async () => {
      if (!requestParams.url) return;

      dispatch({ type: 'SET_LOADING', payload: true });
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
        dispatch({ type: 'SET_DATA', payload: newData });
        dispatch({
          type: 'ADD_TO_HISTORY',
          payload: { ...requestParams, results: newData },
        });
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        dispatch({ type: 'SET_DATA', payload: null });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
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
              <Outlet context={{ state, dispatch }} />
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
          element: <Home data={data} dispatch={dispatch} requestParams={requestParams} isLoading={isLoading} />,
        },        
        {
          path: "/history",
          element: <History history={history} dispatch={dispatch} />,
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
