/* eslint-disable react/prop-types */
import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditVendor = (props) => {
    return (
        <Edit title="Editar Vendor" {...props}>
            <SimpleForm>
                <TextInput label="Logo" source="logoPath" />
                <TextInput label="Nombre Empresa" source="name" />
                <TextInput label="Número de contacto" source="contactNumber" />
                <TextInput label="Sitio web" source="websiteUrl" />
                <TextInput multiline label="Descripción" source="description" />
            </SimpleForm>
        </Edit>
    );
};

export default EditVendor;
