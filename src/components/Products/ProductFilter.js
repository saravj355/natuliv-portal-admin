import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const useFilterStyles = makeStyles({
    status: { width: 150, borderRadius: 20 }
});

const ProductFilter = (props) => {
    const classes = useFilterStyles();

    return (
        <Filter {...props}>
            <TextInput label="Nombre" source="name" />
            <SelectInput
                source="isActive"
                label="Estado"
                choices={[
                    { id: true, name: 'Activo' },
                    { id: false, name: 'Ináctivo' }
                ]}
                className={classes.status}
            />
            <ReferenceInput
                source="productCategoryId"
                reference="products/categories"
            >
                <SelectInput label="Categoría" optionText="displayName" />
            </ReferenceInput>
        </Filter>
    );
};

export default ProductFilter;
