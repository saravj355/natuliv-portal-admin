import { Button, makeStyles } from '@material-ui/core';
import { stringify } from 'native-url/node_modules/querystring';
import * as React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    icon: { paddingRight: '0.5em' }
});

const LinkToRelatedProducts = ({ record }) => {
    const classes = useStyles();
    return record
        ? (
            <Button
                to={{
                    pathname: '/products',
                    search: stringify({
                        filter: JSON.stringify({ productCategoryId: record.id })
                    })
                }}
                component={Link}
                className={classes.link} >
                Ver productos
            </Button >
        )
        : null;
};

export default LinkToRelatedProducts;
