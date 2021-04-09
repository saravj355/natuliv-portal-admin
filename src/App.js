import simpleRestProvider from 'ra-data-simple-rest';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/Dashboard';

function App () {
    return (
        <Admin dashboard={Dashboard} dataProvider={simpleRestProvider('http://localhost:5000')}>
            <Resource name="buyers/search"/>
        </Admin>
    );
}
export default App;
