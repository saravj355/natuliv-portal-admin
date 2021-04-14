import * as React from 'react';
import { Datagrid, DateField, EditButton, EmailField, FunctionField, List, TextField } from 'react-admin';

const ListBuyers = props => (
    <List bulkActionButtons={false} {...props}>
        <Datagrid>
            <TextField label="Nombre" source="fullName" />
            <EmailField label="Correo" source="identityUser.email" />
            <DateField label="Fecha de nacimiento" source="bornDate" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
            <TextField label="Género" source="gender.displayName" />
            <FunctionField label="Estado" sortBy="isActive" render={(record) => record.identityUser.isActive ? 'ACTIVO' : 'INÁCTIVO'} />
            <EditButton/>
        </Datagrid>
    </List>
);

export default ListBuyers;
