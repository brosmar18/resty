import './History.scss';

const History = ({ history, dispatch }) => {
  const handleClick = (requestParams) => {
    dispatch({ type: 'SET_REQUEST_PARAMS', payload: requestParams });
  };

  return (
    <div>
      <h2>History</h2>
      {history.map((entry, index) => (
        <div key={index} onClick={() => handleClick(entry)}>
          <p><b>Method:</b> {entry.method}</p>
          <p><b>URL:</b> {entry.url}</p>
        </div>
      ))}
    </div>
  );
}

export default History;
