import { Typography } from '@material-ui/core';
import * as React from 'react';
import {
    ReferenceField, Show,
    Tab,
    TabbedShowLayout, TextField
} from 'react-admin';
import CategoryRelatedProducts from './CategoryRelatedProducts';

const ProductTitle = ({ record }) =>
    record ? <span>{record.name}</span> : null;

const ShowProduct = (props) => {
    return (
        <Show title={<ProductTitle />} {...props} >
            <TabbedShowLayout>
                <Tab label="Información producto">
                    <TextField source="imagePath" />
                    <TextField source="name" />
                    <TextField source="price" />
                    <TextField source="description" />
                    <ReferenceField
                        source="productCategoryId"
                        reference="categories"
                        label="Categoría"
                    >
                        <TextField source="displayName" />
                    </ReferenceField>
                    <Typography
                        variant="h5"
                        component="h2"
                        color="primary"
                        align="center"
                    >
                        Productos Relacionados
                    </Typography>
                    <CategoryRelatedProducts />
                </Tab>
            </TabbedShowLayout>
        </Show >
    );
};

export default ShowProduct;
