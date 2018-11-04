import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Backspace from '@material-ui/icons/Backspace';
import ShopTwo from '@material-ui/icons/ShopTwo';

function createData(drug, quantity, refill, price, tax, total) {
  return { drug, quantity, refill, price, tax, total };
}

const rows = [
    createData('Apo-Hydroxyquine', 30, 3, 25.00, 3.25, 28.25),
    createData('Keflex', 40, 0, 0.00, 0, 0, 0),
  ];

class Checkout extends Component {
    
    render() {
    return (
        <div>     
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Drug</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Refills</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Tax</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => {
                        return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">{row.drug}</TableCell>
                            <TableCell numeric>{row.quantity}</TableCell>
                            <TableCell numeric>{row.refill}</TableCell>
                            <TableCell numeric>$ {row.price}</TableCell>
                            <TableCell numeric>$ {row.tax}</TableCell>
                            <TableCell numeric>$ {row.total}</TableCell>
                        </TableRow>
                        );
                    })}
                    <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell numeric></TableCell>
                        <TableCell numeric></TableCell>
                        <TableCell numeric>Subtotal</TableCell>
                        <TableCell numeric>$0.00</TableCell>
                        <TableCell numeric>$28.25</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </Paper>
            <Button variant="contained" component={Link} to="/PaymentOptions" color="secondary">Proceed to Paymemt<ShopTwo /></Button>
            <Button variant="contained" component={Link} to="/Order" color="secondary">Back<Backspace /></Button>
        </div>
        );
  }
}

export default Checkout;