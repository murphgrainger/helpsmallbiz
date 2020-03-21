import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { THEME } from './constants';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme(THEME);

ReactDOM.render(
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)

process.env.NODE_ENV === 'development' ? serviceWorker.unregister() :  serviceWorker.register()
