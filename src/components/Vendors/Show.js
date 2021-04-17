import React from 'react';
import {
    Datagrid,
    FunctionField,
    ImageField,
    ReferenceManyField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from 'react-admin';

const ShowVendor = (props) => {
    return (
        <Show title="Vendor" {...props}>
            <TabbedShowLayout>
                <Tab label="Información vendedor">
                    <TextField source="id" />
                    <TextField source="name" />
                </Tab>
                <Tab label="Productos" path="products">
                    <ReferenceManyField
                        addLabel={false}
                        reference="products"
                        target="vendorId"
                        label="Products"
                    >
                        <Datagrid>
                            <ImageField label="Producto" source="" />
                            <TextField label="Nombre" source="name" />
                            <TextField label="Precio" source="price" />
                            <TextField
                                label="Categoria"
                                source="productCategory.displayName"
                                sortable={false}
                            />
                            <FunctionField
                                label="Estado"
                                sortBy={'isActive'}
                                render={(record) =>
                                    record.isActive ? 'ACTIVO' : 'INÁCTIVO'
                                }
                            />
                        </Datagrid>
                    </ReferenceManyField>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default ShowVendor;
