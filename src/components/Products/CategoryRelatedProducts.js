import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import RedirectLink from '@material-ui/core/Link';
import * as React from 'react';
import {
    linkToRecord, List, ReferenceManyField, useListContext
} from 'react-admin';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginTop: '0.5em'
    },
    media: {
        height: 200
    },
    title: {
        paddingBottom: '0.5em'
    }
});

const GridRelatedProducts = (props) => {
    const { data, ids, basePath } = useListContext();
    const classes = useStyles(props);
    return (
        <Grid container spacing={2} className={classes.root}>
            {ids.filter(product => product !== props.item).map(id =>
                <Grid key={id} xs={3} item>
                    <RedirectLink
                        component={Link}
                        key={id}
                        to={linkToRecord(basePath, data[id].id, 'show')}
                    >
                        <Card>
                            <CardMedia
                                image={'https://designshack.net/wp-content/uploads/placeholder-image-368x246.png'}
                                className={classes.media}
                            />
                            <CardContent className={classes.title}>
                                <Typography
                                    variant="h6"
                                    component="h5"
                                    align="center"
                                >
                                    {data[id].name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </RedirectLink>
                </Grid>
            )}
        </Grid >
    );
};

const ListRelatedProducts = (props) => (
    <List
        {...props}
        sort={{ field: 'name', order: 'ASC' }}
        component="div"
        pagination={false}
        actions={false}
        addLabel={false}
    >
        <GridRelatedProducts {...props} />
    </List>
);

const CategoryRelatedProducts = ({ record }) => (
    <ReferenceManyField
        target="productCategoryId"
        reference="products"
        filter={{ productCategoryId: record.productCategoryId }}
    >
        <ListRelatedProducts item={record.id} />
    </ReferenceManyField >

);

export default CategoryRelatedProducts;
