import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/Backspace';
import CreditCard from '@material-ui/icons/CreditCard';
import Money from '@material-ui/icons/Money';
import Toll from '@material-ui/icons/Toll';

class PaymentOptions extends Component {
  render() {
    return (
        <div>        
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" >Insert Payment Method</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" component={Link} to="/PaymentReceived" color="secondary">Coin(s)<Toll/></Button>
                    <Button variant="contained" component={Link} to="/PaymentReceived" color="secondary">Bill(s)<Money /></Button>
                    <Button variant="contained" component={Link} to="/PaymentReceived" color="secondary">Debit/Credit/Gift Card(s)<CreditCard /></Button>
                    <Button variant="contained" component={Link} to="/Checkout" color="secondary">Back<Backspace /></Button>
                </CardActions>
            </Card>
        </div>
    );
  }
}

export default PaymentOptions;