import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';
import { CardActions, List, useListContext } from 'react-admin';
import LinkToRelatedProducts from '../Products/LinkToRelatedProducts';

const useStyles = makeStyles({
    root: {
        marginTop: '0.5em'
    },
    media: {
        height: 200
    },
    title: {
        paddingBottom: '0.5em'
    },
    actionSpacer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
});

const ListCategories = (props) => {
    const classes = useStyles(props);
    const { data, ids } = useListContext();
    return ids
        ? (
            <Grid container spacing={2} className={classes.root}>
                {ids.map(id => (
                    <Grid key={id} xs={6} item>
                        <Card>
                            <CardMedia
                                image={'https://theimageconference.org/wp-content/uploads/2019/11/vancouver_image_conference.jpg'}
                                className={classes.media}
                            />
                            <CardContent className={classes.title}>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    {data[id].displayName}
                                </Typography>
                            </CardContent>
                            <CardActions classes={{ spacing: classes.actionSpacer }}>
                                <LinkToRelatedProducts record={data[id]} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
        : null;
};

const CategoryList = props => (
    <List
        {...props}
        sort={{ field: 'displayName', order: 'ASC' }}
        component="div"
        pagination={false}
        actions={false}
    >
        <ListCategories />
    </List>
);

export default CategoryList;
