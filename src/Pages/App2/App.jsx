import { useState } from "react";

// import "./App.scss";
import Form from "../../Components/Form";
import Results from "../../Components/Results";

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const callApi = (newRequestParams) => {
    setIsLoading(true);+
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

  return (
    <div data-testid='app' className="app">
    <Form handleApiCall={callApi} />
    <Results data={data} requestParams={requestParams} isLoading={isLoading} />
  </div>
  );
};

export default App;