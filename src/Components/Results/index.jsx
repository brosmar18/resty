import './Results.scss';

const Results = ({ data, requestParams, isLoading }) => {
  return (
    <section className="results" data-testid="results-section">
      {isLoading ? (
        <p data-testid="loading">Loading...</p>
      ) : (
        <>
          <div className='results__text' data-testid="results-text">
            {requestParams.method && <p data-testid="method"><span className="results__method-label">Method:</span> {requestParams.method}</p>}
            {requestParams.url && <p data-testid="url"><span className="results__url-label">URL:</span> {requestParams.url}</p>}
          </div>
          <code data-testid="result-data">{data ? JSON.stringify(data, null, 2) : 'No Data'}</code>
        </>
      )}
    </section>
  );
}

export default Results;
