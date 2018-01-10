import React, {Component} from 'react';
import Layout from './common/container/Layout';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        );
    }
}

export default App;
