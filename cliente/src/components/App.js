import React, { Component } from 'react';

import '../css/App.css';
import Auth from '../Auth'

import Router from './Router'


class App extends Component {

  auth = new Auth()

  state = { 
    auth: this.auth
  }

  render() { 
    return (
        <div className="contenedor">
            <Router
              auth={this.state.auth}
            />
        </div>
      );
  }
}
 
export default App;