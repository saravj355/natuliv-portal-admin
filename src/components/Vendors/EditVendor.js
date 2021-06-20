import * as React from 'react';
import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin';

const EditVendor = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name" label="Nombre" />
                <TextInput source="contactNumber" label="Número de contacto" />
                <TextInput source="websiteUrl" label="Sitio Web" />
                <TextInput multiline source="description" label="Descripción" />
                <BooleanInput source="isActive" label="Estado" />
            </SimpleForm>
        </Edit>
    );
};

export default EditVendor;
