import React, { Component } from 'react';
import '../css/App.css';

import Router from './Router'


class App extends Component {
  state = { 
  }

  render() { 
    return (
        <div className="contenedor">
            <Router/>
        </div>
      );
  }
}
 
export default App;