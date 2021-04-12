import { Group, LocalMall, StoreMallDirectory } from '@material-ui/icons';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import Buyer from './components/Buyers';
import Dashboard from './components/Dashboard';
import Product from './components/Products';
import Vendor from './components/Vendors';
import DataProvider from './data-provider';

function App () {
    return (
        <Admin dashboard={Dashboard} dataProvider={DataProvider}>
            <Resource name="buyers" icon={Group}list={Buyer.List} edit={Buyer.Edit} create={Buyer.Create}/>
            <Resource name="products" icon={LocalMall}list={Product.List} edit={Product.Edit} create={Product.Create}/>
            <Resource name="vendors" icon={StoreMallDirectory}list={Vendor.List} edit={Vendor.Edit} show={Vendor.Show} create={Vendor.Create}/>
        </Admin>
    );
}
export default App;
