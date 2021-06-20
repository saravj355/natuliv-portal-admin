import * as React from 'react';
import {
    ReferenceField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from 'react-admin';

const ProductTitle = ({ record }) =>
    record ? <span>Producto {record.name}</span> : null;

const ShowProduct = (props) => {
    return (
        <Show {...props} title={<ProductTitle />}>
            <TabbedShowLayout>
                <Tab label="Información producto">
                    <TextField source="id" />
                    <TextField source="name" />
                </Tab>
                <Tab label="Información del vendedor" path="vendor">
                    <ReferenceField
                        source="vendorId"
                        reference="vendors"
                        label="Proveedor"
                    >
                        <TextField label="Nombre" source="name" />
                    </ReferenceField>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default ShowProduct;
