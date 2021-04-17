import * as React from 'react';
import { Filter, SearchInput, SelectInput } from 'react-admin';

const VendorFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Nombre" source="name" alwaysOn />
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
