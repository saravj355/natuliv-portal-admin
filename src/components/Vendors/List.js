import * as React from 'react';
import {
    Datagrid,
    EditButton,
    FunctionField,
    ImageField,
    List,
    ShowButton,
    TextField,
    UrlField
} from 'react-admin';
import VendorFilter from './VendorFilter';

const ListVendors = (props) => (
    <List
        filters={<VendorFilter />}
        {...props}
        bulkActionButtons={false}
        sort={{ field: 'isActive', order: 'DESC' }}
    >
        <Datagrid>
            <ImageField label="Logo" source="" />
            <TextField label="Nombre" source="name" />
            <TextField
                sortable={false}
                label="Contacto"
                source="contactNumber"
            />
            <UrlField
                label="Página Web"
                source="websiteUrl"
                target="_blank"
                sortable={false}
            />
            <FunctionField
                label="Estado"
                sortBy={'isActive'}
                render={(record) => (record.isActive ? 'ACTIVO' : 'INÁCTIVO')}
            />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export default ListVendors;
