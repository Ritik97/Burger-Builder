import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Testing My App</p>
        </Layout>          
      </div>
    );
  }
}

export default App;
