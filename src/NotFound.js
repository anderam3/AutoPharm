import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Typography variant="h3">404 - Page Not Found</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" component={Link} to="/Welcome" color="secondary">Back<Backspace /></Button>
            </CardActions>
        </Card>
      </div>
    )
  }
}