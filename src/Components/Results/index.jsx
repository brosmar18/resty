import './Results.scss';

const Results = ({ data, requestParams, isLoading }) => {
  return (
    <section className="results">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='results__text'>
            {requestParams.method && <p><span className="results__method-label">Method:</span> {requestParams.method}</p>}
            {requestParams.url && <p><span className="results__url-label">URL:</span> {requestParams.url}</p>}
          </div>
          <code>{data ? JSON.stringify(data, null, 2) : 'No Data'}</code>
        </>
      )}
    </section>
  )
}

export default Results;
