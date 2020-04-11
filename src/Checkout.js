import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { drugs } from './Data'
import Backspace from '@material-ui/icons/Backspace';
import Button from '@material-ui/core/Button';
import ShopTwo from '@material-ui/icons/ShopTwo';
import MUIDataTable from 'mui-datatables'

class Checkout extends Component {
    
    render() {
        const columns = [
            "",
            "Quantity",
            "Refills Left",
            "Price"
        ]
        
        const data = drugs.list.map(drug => ([
            <NavLink to={`/Form/${drug.id}`}>{drug.name}</NavLink>,
            drug.quantity,
            drug.refill,
            drug.price
        ]))

        const options = {
            rowsPerPageOptions: false,
            filterType: 'checkbox',
            search: false,
            print: false,
            download: false
        };
    return (
        <div>
            <MUIDataTable
                title={"Select Drug(s) to Buy or Remove from Menu"}
                data={data}
                columns={columns}
                options={options}
            />
            <Button variant="contained" component={Link} to="/PaymentOptions" color="secondary">Proceed to Paymemt<ShopTwo /></Button>
            <Button variant="contained" component={Link} to="/Order" color="secondary">Back<Backspace /></Button>
        </div>
    );
  }
}

export default Checkout;