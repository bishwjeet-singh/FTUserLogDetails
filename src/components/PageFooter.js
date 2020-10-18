import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const PageFooter = () => {
    const classes = useStyles();
    return (
      <>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Come back tomorrow to check user activity again
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                FullThrottle Labs
            </Typography>
            <Copyright />
        </footer>
      </>
    )
}

const Copyright = () => {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://www.linkedin.com/in/bishwjeet-singh/">
                    Bishwjeet Singh
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: 'white',
      padding: theme.spacing(6),
    },
}));

export default PageFooter