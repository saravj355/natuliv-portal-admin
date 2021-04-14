import * as React from 'react';
import { Filter, SelectInput, TextInput } from 'react-admin';

const VendorFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nombre" source="name" />
        <SelectInput
            source="isActive"
            label="Estado"
            choices={[
                { id: true, name: 'Activo' },
                { id: false, name: 'Ináctivo' }
            ]}
        />
    </Filter>
);

export default VendorFilter;
