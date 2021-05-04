import React from 'react';
import { Admin, Resource } from 'react-admin';
import Buyer from './components/Buyers';
import Dashboard from './components/Dashboard';
import Product from './components/Products';
import Vendor from './components/Vendors';
import DataProvider from './dataProvider';

function App () {
    return (
        <Admin dashboard={Dashboard} dataProvider={DataProvider}>
            <Resource
                name="buyers"
                options={{ label: 'Usuarios' }}
                {...Buyer}
            />
            <Resource
                name="products"
                options={{ label: 'Productos' }}
                {...Product}
            />
            <Resource
                name="vendors"
                options={{ label: 'Proveedores' }}
                {...Vendor}
            />
        </Admin>
    );
}
export default App;
