import React from 'react';
import { Datagrid, FunctionField, ReferenceManyField, Show, ShowButton, Tab, TabbedShowLayout, TextField } from 'react-admin';

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
                        label="Products">
                        <Datagrid>
                            <TextField label="Id" source="id" />
                            <TextField label="Nombre" source="name" />
                            <TextField label="Categoría" source="productCategory.categoryName"/>
                            <TextField label="Descripción" source="description" />
                            <TextField label="Precio" source="price"/>
                            <FunctionField label="Estado" render={(record) => record.isActive ? 'ACTIVO' : 'INÁCTIVO'} />
                            <ShowButton />
                        </Datagrid>
                    </ReferenceManyField>
                </Tab>
            </TabbedShowLayout>
        </Show>

    );
};

export default ShowVendor;
