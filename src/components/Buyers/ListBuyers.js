import * as React from 'react';
import {
    Datagrid,
    EditButton,
    Filter, List,
    NullableBooleanInput,
    SelectInput,
    TextField,
    TextInput
} from 'react-admin';

const ListBuyers = (props) => (
    <List {...props} filters={<FilterBuyer />} bulkActionButtons={false}>
        <BuyerListView />
    </List>
);

export const FilterBuyer = (props) => {
    return (
        <Filter {...props}>
            <TextInput label="Nombre" source="fullName" alwaysOn />
            <TextInput label="Correo Electrónico" source="email" />
            <NullableBooleanInput label="Estado" source="isActive" />
            <SelectInput
                source="gender"
                label="Género"
                choices={[
                    { id: 'female', name: 'Femenino' },
                    { id: 'male', name: 'Masculino' }
                ]}
            />
        </Filter>
    );
};

const BuyerListView = () => {
    return (
        <Datagrid rowClick="show">
            <TextField label="Nombre" source="identityUser.fullName" />
            <TextField label="Correo Electrónico" source="identityUser.email" />
            <TextField label="Género" source="gender.displayName" />
            <EditButton />
        </Datagrid>
    );
};

export default ListBuyers;
