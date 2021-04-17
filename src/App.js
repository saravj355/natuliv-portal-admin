import React from 'react';
import { Admin, Resource } from 'react-admin';
import Buyer from './components/Buyers';
import Category from './components/Categories';
import Dashboard from './components/Dashboard';
import Product from './components/Products';
import Vendor from './components/Vendors';
import DataProvider from './data-provider';

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
            <Resource
                name="products/categories"
                options={{ label: 'Categorias' }}
                {...Category}
            />
        </Admin>
    );
}
export default App;
