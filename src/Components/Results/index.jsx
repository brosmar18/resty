import './Results.scss';

const Results = ({ data }) => {
  return (
    <section className='results'>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null }</pre>
    </section>
  )
}

export default Results;