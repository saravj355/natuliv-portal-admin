import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Buyers, Categories, Dashboard, Products, Vendors } from './components';
import DataProvider from './dataProvider';

function App () {
    return (
        <Admin dashboard={Dashboard} dataProvider={DataProvider}>
            <Resource
                name="buyers"
                options={{ label: 'Clientes' }}
                {...Buyers}
            />
            <Resource
                name="vendors"
                options={{ label: 'Proveedores' }}
                {...Vendors}
            />
            <Resource
                name="products"
                options={{ label: 'Productos' }}
                {...Products}
            />
            <Resource
                name="categories"
                options={{ label: 'Categorias' }}
                {...Categories}
            />
        </Admin>
    );
}
export default App;
