import * as React from 'react';
import {
    Datagrid,
    EditButton,
    Filter,
    FunctionField,
    List, NullableBooleanInput, NumberField,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput
} from 'react-admin';

const FilterProduct = (props) => {
    return (
        <Filter {...props}>
            <TextInput label="Nombre Producto" source="name" alwaysOn />
            <ReferenceInput
                source="vendorId"
                reference="vendors"
                label="Proveedor"
                sort={{ field: 'name', order: 'ASC' }}
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput
                source="productCategoryId"
                reference="categories"
                label="Categoría"
                sort={{ field: 'displayName', order: 'ASC' }}
            >
                <SelectInput optionText="displayName" />
            </ReferenceInput>
            <NullableBooleanInput label="Estado" source="isActive" trueLabel="Activo" falseLabel="Ináctivo" />
        </Filter>
    );
};

const ProductGridView = () => {
    return (
        <Datagrid rowClick="show">
            <TextField source="imagePath" sortable={false} addLabel={false} />
            <TextField label="Nombre" source="name" />
            <ReferenceField
                label="Proveedor"
                reference="vendors"
                source="vendorId"
            >
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField
                label="Categoria"
                reference="categories"
                source="productCategoryId"
            >
                <TextField source="displayName" />
            </ReferenceField>
            <NumberField label="Precio" source="price" />
            <FunctionField
                label="Estado"
                sortBy={'isActive'}
                render={(record) => (record.isActive ? 'Activo' : 'Ináctivo')}
            />
            <EditButton />
        </Datagrid>
    );
};

const ListProducts = (props) => (
    <List
        {...props}
        filters={<FilterProduct />}
        bulkActionButtons={false}
        sort={{ field: 'isActive', order: 'DESC' }}
        title="Productos"
        hasCreate={true}
    >
        <ProductGridView />
    </List>
);

export default ListProducts;
