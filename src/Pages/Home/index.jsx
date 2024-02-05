import Form from "@/Components/Form";
import "./Home.scss";
import Results from "@/Components/Results";

const Home = ({
  data,
  requestParams,
  dispatch, // Updated to receive dispatch
  isLoading,
}) => {

  const handleApiCall = (newRequestParams) => {
    dispatch({ type: 'SET_REQUEST_PARAMS', payload: newRequestParams });
  };

  return (
    <div className="home">
      <div className="home__container">
        <h1>RESTy</h1>
        <Form handleApiCall={handleApiCall} />
      </div>
      <Results
        data={data}
        requestParams={requestParams}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
