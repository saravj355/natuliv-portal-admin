import * as React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';

const ListProducts = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
            <TextField label="Nombre" source="name" />
            <TextField label="Precio" source="price" />
            <EditButton/>
        </Datagrid>
    </List>
);

export default ListProducts;
