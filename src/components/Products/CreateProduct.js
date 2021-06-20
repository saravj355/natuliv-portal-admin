import React from 'react';
import {
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

const redirectShow = (basePath, id) => `${basePath}/${id}/show`;

const CreateProduct = (props) => {
    return (
        <Create {...props}>
            <SimpleForm margin="normal" redirect={redirectShow}>
                <TextInput source="imagePath" />
                <TextInput source="name" label="Nombre del producto" />
                <TextInput multiline source="description" label="Descripción" />
                <NumberInput source="price" label="Precio" />
                <ReferenceInput source="vendorId" reference="vendors" label="Proveedor">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput
                    source="productCategoryId"
                    reference="categories"
                    label="Categoría"
                >
                    <SelectInput optionText="displayName" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default CreateProduct;
