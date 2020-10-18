import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
//import Grid from '@material-ui/core/Grid'
//import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const HeroSection = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    User Activities
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Let's checkout the logs of users to see when they logged in or off today.
                    You can also easily navigate and check user's activity time for any day using the calendar!
                </Typography>
                {/*
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Main call to action
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>*/}
                </Container>
            </div>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: 'white',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));

export default HeroSection