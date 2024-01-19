import { useState } from 'react';
import './Form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const url = e.target.url.value || 'https://pokeapi.co/api/v2/pokemon';

    const formData = {
      method,
      url,
      ...(method === 'POST' || method === 'PUT' ? { body } : {}),
    };
    props.handleApiCall(formData);
  };

  const handleMethodChange = (newMethod) => {
    setMethod(newMethod);
  };

  return (
    <div data-testid='form' className='form'>
      <h2>RESTy</h2>
      <form onSubmit={handleSubmit}>
        <div className='form__input'>
          <input name='url' type='text' />
          <label>Enter URL!</label>
        </div>
        <div className='methods'>
          {['GET', 'POST', 'PUT', 'DELETE'].map((m) => (
            <span key={m} 
                  id={m.toLowerCase()} 
                  className={method === m ? 'active' : ''} 
                  onClick={() => handleMethodChange(m)}>
              {m}
            </span>
          ))}
        </div>
        {(method === 'POST' || method === 'PUT') && (
          <textarea name='body' onChange={(e) => setBody(e.target.value)} />
        )}
        <button type='submit' className='btn'>Go!</button>
      </form>
    </div>
  );
};

export default Form;
