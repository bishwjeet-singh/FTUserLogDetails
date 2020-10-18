import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const PageHeader = () => {
    return(
        <>
            <AppBar position="relative" style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <img src={require("../assets/ftlogo.png")} className="Logo" alt="logo" style={{borderRadius: "4px", width: "50px", height: "50px"}}/>
                    <Typography variant="h6" color="inherit" noWrap style={{paddingLeft: "12px", paddingTop: "4px"}}>
                        FullThrottle Labs
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )

}

export default PageHeader