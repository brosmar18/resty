import './Form.scss';


const Form = (props) => {

  const handleSubmit = e => {
    e.preventDefault();

    // Gets value from the input field
    const url = e.target.url.value || 'https://pokeapi.co/api/v2/pokemon';
    
    const formData = {
      method: "GET",
      url: url,
    };
    props.handleApiCall(formData);
  };


    return (
      <div className='form'>
        <h2>RESTy</h2>
        <form onSubmit={handleSubmit}>
          <div className='form__input'>
            <input name='url' type='text' />
            <label>Enter URL!</label>
          </div>
          <button type='submit' className='btn'>Go!</button>
          <label className='methods'>
          <span id='get'>GET</span>
          <span id='post'>POST</span>
          <span id='put'>PUT</span>
          <span id='delete'>DELETE</span>
        </label>
        </form>
      </div>
    )
  }
  
  export default Form;