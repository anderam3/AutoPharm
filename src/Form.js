import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { forms } from './Data';
import Backspace from '@material-ui/icons/Backspace';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Form extends React.Component {
  render() {
    return (
      <div>
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5">This prescription is made in {forms.list[this.props.match.params.id].state} form.</Typography>
                    <Typography>Examples include {forms.list[this.props.match.params.id].ex}s.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" component={Link} to="/Checkout" color="secondary">Back<Backspace /></Button>
            </CardActions>
        </Card>
      </div>
    )
  }
} 