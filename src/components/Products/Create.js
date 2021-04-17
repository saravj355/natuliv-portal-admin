import React from 'react';
import {
    Create,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    useNotify,
    useRedirect,
    useRefresh
} from 'react-admin';

const CreateProduct = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify('Changes saved');
        redirect('/products');
        refresh();
    };
    return (
        <Create onSuccess={onSuccess} {...props}>
            <SimpleForm margin="normal">
                <TextInput source="imagePath" />
                <TextInput source="name" label="Nombre del producto" />
                <TextInput multiline source="description" label="Descripción" />
                <NumberInput source="price" label="Precio" />
                <ReferenceInput
                    source="vendorId"
                    reference="vendors"
                    label="Proveedor"
                >
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput
                    source="productCategoryId"
                    reference="products/categories"
                    label="Categoría"
                >
                    <SelectInput optionText="displayName" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default CreateProduct;
