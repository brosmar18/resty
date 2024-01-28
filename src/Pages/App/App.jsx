import { useState, useEffect } from "react";
import "./App.scss";
import Results from "../../Components/Results";
import Form from "@/Components/Form";

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
            'Content-Type': 'application/json', 
          },
          body: requestParams.method === 'GET' || requestParams.method === 'DELETE' ? null : JSON.stringify(requestParams.body),
        });

        if (!response.ok) throw new Error('Network response was not ok.');

        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [requestParams]); 

  return (
    <div data-testid="app" className="app">
      <div className="app__info">
        <h1>RESTy</h1>
        <Form handleApiCall={setRequestParams} /> 
      </div>
      <Results data={data} requestParams={requestParams} isLoading={isLoading} />
    </div>
  );
};

export default App;
