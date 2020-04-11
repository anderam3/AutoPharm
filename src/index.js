import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from '@material-ui/core';
import MaterialTheme from './MaterialTheme';
const Root = () => (
    <MuiThemeProvider theme={MaterialTheme}>
        <App/>
    </MuiThemeProvider> 
)
ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();