import React, { Component } from 'react';
import Auth from '../Auth';

import '../css/Callback.css'

class Callback extends Component {

    componentDidMount() {
        const auth = new Auth()
        auth.handleAuthentication()
    }

    componentWillUpdate() {
        this.props.pegarleApi()
    }

    render() { 
        return ( 
            <div>
                <div class="spinner"></div>
            </div>
         );
    }
}
 
export default Callback;