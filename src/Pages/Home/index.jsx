import Form from "@/Components/Form";
import "./Home.scss";
import Results from "@/Components/Results";

const Home = ({
  data,
  requestParams,
  setRequestParams,
  isLoading,
}) => {
  return (
    <div className="home">
      <div className="home__container">
        <h1>RESTy</h1>
        <Form handleApiCall={setRequestParams} />
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
