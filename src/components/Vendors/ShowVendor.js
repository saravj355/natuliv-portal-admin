import React from 'react';
import {
    FunctionField, ReferenceManyField,
    Show,
    Tab, TabbedShowLayout,
    TextField
} from 'react-admin';
import ListProducts from '../Products/ListProducts';
import VendorUserShowActions from './Users/AddCreateUserButton';
import ListVendorUsers from './Users/ListVendorUsers';

const ShowVendor = (props) => {
    return (
        <Show title="Vendor" actions={<VendorUserShowActions />} {...props}>
            <TabbedShowLayout>
                <Tab label="Información vendedor">
                    <TextField source="logoPath" addLabel={false} />
                    <TextField source="name" label="Nombre" />
                    <TextField source="description" label="Descripción" />
                    <TextField source="contactNumber" label="Contacto" />
                    <TextField source="websiteUrl" label="Sitio Web" />
                    <FunctionField source="isActive" label="Estado" render={(record) => record ? 'Activo' : 'Ináctivo'} />
                </Tab>
                <Tab label="Usuarios" path="users">
                    <ReferenceManyField
                        addLabel={false}
                        reference="vendors"
                        target="_nested_users"
                    >
                        <ListVendorUsers />
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
