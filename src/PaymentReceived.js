import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Message from '@material-ui/icons/Message';
import Receipt from '@material-ui/icons/Receipt';

class PaymentReceived extends Component {
  render() {
    return (
        <div>        
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5">Thank you for shopping at the Pharmacy</Typography>
                        <Chip color="secondary" avatar={<Avatar><Receipt /></Avatar>} label="Please pick up your change and bring your receipt to the pharmacist when ready."></Chip> 
                        <Typography>Your prescription will be ready in 10 minutes.</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary">Email Notification?<Email /></Button>
                    <Button variant="contained" color="secondary">SMS Notification?<Message /></Button>  
                </CardActions>
            </Card>
        </div>

        );
  }
}

export default PaymentReceived;