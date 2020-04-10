import React, { Component } from 'react';
import Logo from './Logo.jpg';
import './App.css';
import Router from './Router';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
        <Button variant="outlined" color="primary" href="callto:PLACEHOLDER">Speak with a Pharmacist<RecordVoiceOver /></Button>
        <Button variant="outlined" color="primary">Quit<ExitToApp /></Button>
        <Button><img src={Logo} alt="AutoPhill" width="25%"/></Button>
      </div>
    );
  }
}

export default App;
