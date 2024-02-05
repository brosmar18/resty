import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import './Results.scss';

const Results = ({ data, requestParams, isLoading }) => {
  return (
    <section className="results" data-testid="results-section">
      {isLoading ? (
        <p data-testid="loading">Loading...</p>
      ) : (
        <>
          <div className="results__text" data-testid="results-text">
            {requestParams.method && (
              <p data-testid="method">
                <span className="results__method-label">Method:</span>{" "}
                {requestParams.method}
              </p>
            )}
            {requestParams.url && (
              <p data-testid="url">
                <span className="results__url-label">URL:</span>{" "}
                {requestParams.url}
              </p>
            )}
          </div>
          <div data-testid="result-data" className="results__json">
            {data ? (
              <JsonView
                src={data}
                theme="atom"
                className="react-json-view"
              />
            ) : (
              <p data-testid="no-data" className="noData">
                No Data
              </p>
            )}{" "}
          </div>
        </>
      )}
    </section>
  );
};

export default Results;
