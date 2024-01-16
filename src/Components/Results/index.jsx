import './Results.scss';

const Results = ({ data, requestParams }) => {
  return (
    <section className="results">
      <div className='results__text'>
        <p><span className="results__method-label">Method:</span> {requestParams.method}</p>
        <p><span className="results__url-label">URL:</span> {requestParams.url}</p>
      </div>
      <code>{data ? JSON.stringify(data, undefined, 2) : null}</code>
    </section>
  )
}

export default Results;
