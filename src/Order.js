import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import Backspace from '@material-ui/icons/Backspace';
import Opacity from '@material-ui/icons/Opacity';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

class Order extends Component {
  render() {
    return (
        <div>     
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography>Please insert your prescription(s)</Typography>
                        <SnackbarContent />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary">Refill current prescription(s)<Opacity/></Button>
                    <Button variant="contained" component={Link} to="/Checkout"color="secondary">Continue to checkout<ShoppingCart /></Button>
                    <Button variant="contained" component={Link} to="/Account" color="secondary">Back<Backspace /></Button>
                </CardActions>
            </Card>
        </div>

        );
  }
}

export default Order;