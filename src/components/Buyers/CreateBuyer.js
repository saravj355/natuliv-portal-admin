import React from 'react';
import {
    Create,
    DateInput, PasswordInput, SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

const redirectShow = (basePath, id) => `${basePath}/${id}/show`;

const CreateBuyer = (props) => {
    return (
        <Create {...props} title="Crear usuario">
            <SimpleForm redirect={redirectShow}>
                <TextInput source="fullName" label="Nombre Completo" />
                <TextInput source="email" label="Correo ELectrónico" />
                <PasswordInput source="password" label="Contraseña" />
                <PasswordInput source="confirmPassword" label="Confirmar Contraseña" />
                <TextInput source="city" label="Ciudad" />
                <DateInput source="bornDate" label="Fecha de Nacimiento" />
                <SelectInput
                    source="gender"
                    label="Género"
                    choices={[
                        { id: 'female', name: 'Femenino' },
                        { id: 'male', name: 'Masculino' }
                    ]}
                />
            </SimpleForm>
        </Create>
    );
};

export default CreateBuyer;
