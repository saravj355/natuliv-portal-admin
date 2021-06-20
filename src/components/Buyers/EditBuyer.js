import React from 'react';
import {
    BooleanInput,
    DateInput,
    Edit,
    PasswordInput,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

const EditBuyer = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="identityUser.fullName" label="Nombre Completo"/>
                <TextInput
                    source="identityUser.email"
                    label="Correo Electrónico"
                />
                <PasswordInput source="password" label="Contraseña" />
                <DateInput source="bornDate" label="Fecha de nacimiento" />
                <SelectInput
                    source="genderId"
                    label="Género"
                    choices={[{ id: 'female', name: 'Femenino' },
                        { id: 'male', name: 'Masculino' }
                    ]}
                />
                <TextInput source="city" label="Ciudad" />
                <BooleanInput source="isActive" label="Estado" />
            </SimpleForm>
        </Edit>
    );
};

export default EditBuyer;
