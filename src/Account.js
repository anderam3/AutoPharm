import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Adb from '@material-ui/icons/Adb';
import Backspace from '@material-ui/icons/Backspace';
import Face from '@material-ui/icons/Face';
import Opacity from '@material-ui/icons/Opacity';

class Account extends Component {
  render() {
    return (
        <div>     
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Chip color="primary" avatar={<Avatar><Face /></Avatar>} label="Welcome John Smith"></Chip> 
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary">Refill current prescription(s)<Opacity /></Button>
                    <Button variant="contained" component={Link} to="/Order" color="secondary">Order new prescription(s)<Adb /></Button>
                    <Button variant="contained" component={Link} to="/Welcome" color="secondary">Back<Backspace /></Button>
                </CardActions>
            </Card>
        </div>

        );
  }
}

export default Account;