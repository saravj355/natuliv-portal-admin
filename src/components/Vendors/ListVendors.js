import * as React from 'react';
import {
    Datagrid,
    EditButton,
    Filter,
    FunctionField,
    List,
    NullableBooleanInput, TextField,
    TextInput,
    UrlField
} from 'react-admin';

export const FilterVendor = (props) => {
    return (
        <Filter {...props}>
            <TextInput label="Buscar nombre" source="name" alwaysOn />
            <NullableBooleanInput
                label="Estado"
                source="isActive"
                trueLabel="Activo"
                falseLabel="Ináctivo"
            />
        </Filter>
    );
};

export const VendorGridView = () => {
    return (
        <Datagrid rowClick="show">
            <TextField label="Nombre" source="name" />
            <TextField
                sortable={false}
                label="Contácto"
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
                render={(record) => (record.isActive ? 'Activo' : 'Ináctivo')}
            />
            <EditButton />
        </Datagrid>
    );
};

const ListVendors = (props) => {
    return (
        <List
            {...props}
            filters={<FilterVendor />}
            bulkActionButtons={false}
            sort={{ field: 'isActive', order: 'DESC' }}
            title="Proveedores"
        >
            <VendorGridView />
        </List>
    );
};

export default ListVendors;
