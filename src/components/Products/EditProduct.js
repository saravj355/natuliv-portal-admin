import React from 'react';
import {
    BooleanInput,
    Edit,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

const EditProduct = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
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
                <BooleanInput source="isActive" label="Estado" />
            </SimpleForm>
        </Edit>
    );
};

export default EditProduct;
