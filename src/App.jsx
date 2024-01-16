import React from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    this.setState({requestParams});

    if (requestParams.url) {
      fetch(requestParams.url).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        this.setState({ data });
      }).catch(error => {
        console.error('There has been a problem with the fetch operation: ', error);
        this.setState({ data: null });
      })
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} requestParams={this.state.requestParams} />
        <Footer />
      </div>
    );
  }
}

export default App;
