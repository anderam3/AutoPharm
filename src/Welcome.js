import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreditCard from '@material-ui/icons/CreditCard';

class Welcome extends Component {
  render() {
    return (
        <div>        
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h3">Welcome to the Pharmacy</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography>Please insert your health card</Typography>
                    <Button variant="contained" component={Link} to="/Account" color="secondary"><CreditCard /></Button>
                </CardActions>
            </Card>
        </div>
        );
  }
}

export default Welcome;