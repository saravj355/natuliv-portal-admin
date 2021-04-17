import * as React from 'react';
import {
    Datagrid,
    EditButton,
    FunctionField,
    List,
    NumberField,
    ReferenceField,
    ShowButton,
    TextField
} from 'react-admin';
import ProductFilter from './ProductFilter';

const ListProducts = (props) => (
    <List
        filters={<ProductFilter />}
        {...props}
        bulkActionButtons={false}
        sort={{ field: 'isActive', order: 'DESC' }}
    >
        <Datagrid>
            <ReferenceField reference="vendors" source="vendorId">
                <TextField source="name" />
            </ReferenceField>
            <TextField label="Nombre" source="name" />
            <ReferenceField
                reference="products/categories"
                source="productCategoryId"
            >
                <TextField source="displayName" />
            </ReferenceField>
            <NumberField label="Precio" source="price" />
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

export default ListProducts;
