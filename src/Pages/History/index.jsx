import { useState } from "react";
import JsonView from "react18-json-view"; // Assuming you're using "react18-json-view" as stated
import "react18-json-view/src/style.css";
import "./History.scss";

const History = ({ history }) => {
  const [visibleResults, setVisibleResults] = useState({});

  const toggleResultsVisibility = (index) => {
    setVisibleResults((prevVisibleResults) => ({
      ...prevVisibleResults,
      [index]: !prevVisibleResults[index],
    }));
  };

  return (
    <div className="history">
      <h2>History</h2>
      {history.map((entry, index) => (
        <div key={index} className="history-entry">
          <div className="history-entry__details">
            <p>
              <b>Method:</b> {entry.method}
            </p>
            <p>
              <b>URL:</b> {entry.url}
            </p>
          </div>
          <button
            onClick={() => toggleResultsVisibility(index)}
            className="toggle-results"
          >
            {visibleResults[index] ? "Hide Results" : "Show Results"}
          </button>
          {visibleResults[index] && (
            <div className="history-results">
              <JsonView
                className="react-json-view"
                src={entry.results}
                theme="atom"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
