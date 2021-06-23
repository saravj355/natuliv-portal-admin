import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const redirectShow = (basePath, id) => `${basePath}/${id}/show`;

const CreateVendor = (props) => {
    return (
        <Create {...props}>
            <SimpleForm redirect={redirectShow}>
                <TextInput source="name" label="Nombre" />
                <TextInput source="logoPath" label="Logo" />
                <TextInput source="contactNumber" label="Número de contacto" />
                <TextInput source="websiteUrl" label="Sitio Web" />
                <TextInput multiline source="description" label="Descripción" />
            </SimpleForm>
        </Create>
    );
};

export default CreateVendor;
