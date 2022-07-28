import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
    const [ currentId, setter ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return(
        <Container maxwidth = 'lg'>
            <AppBar className={classes.AppBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant = 'h2' align = 'center'>Memories</Typography>
            </AppBar>
            <br />
            <br />
            <Grow in>
                <Container>
                    <Grid container justifyContent = 'space-between' alignItems='stretch' spacing = {3}>
                        <Grid item xs = {12} sm = {7}>
                            <Posts setter={ setter } />
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <Form currentId={currentId} setter={ setter } />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;