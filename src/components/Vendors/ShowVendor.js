import React from 'react';
import {
    Datagrid, EditButton, FunctionField, ReferenceManyField,
    Show,
    Tab, TabbedShowLayout,
    TextField
} from 'react-admin';
import ListProducts from '../Products/ListProducts';

const ShowVendor = (props) => {
    return (
        <Show title="Vendor" {...props}>
            <TabbedShowLayout>
                <Tab label="Información vendedor">
                    <TextField source="id" />
                    <TextField source="name" />
                </Tab>
                <Tab label="Usuarios" path="users">
                    <ReferenceManyField
                        addLabel={false}
                        reference="vendors"
                        target="_nested_users"
                    >
                        <Datagrid rowClick="show">
                            <TextField
                                label="Nombre"
                                source="identityUser.fullName"
                            />
                            <TextField
                                label="Correo Electrónico"
                                source="identityUser.email"
                            />
                            <FunctionField
                                label="Última conexión"
                                render={(record) => (record.identityUser.lastLoginDate ? record.identityUser.lastLoginDate : 'No ha ingresado')}
                            />
                            <FunctionField
                                label="Estado"
                                sortBy={'isActive'}
                                render={(record) => (record.identityUser.isActive ? 'Activo' : 'Ináctivo')}
                            />
                            <EditButton />
                        </Datagrid>
                    </ReferenceManyField>
                </Tab>
                <Tab label="Productos" path="products">
                    <ReferenceManyField
                        addLabel={false}
                        reference="products"
                        target="vendorId"
                        filter={{ vendorId: props.id }}
                    >
                        <ListProducts />
                    </ReferenceManyField>
                </Tab>
            </TabbedShowLayout>
        </Show >
    );
};

export default ShowVendor;
