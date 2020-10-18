import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import * as apis from '../apis/api'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import Scheduler from './Scheduler'
import moment from 'moment'
import '../styles/App.css'

class UserGrid extends Component {
    state = {
        getMembers: [],
        isModalVisible: false,
        events: [],
        name: ''
    }

    componentDidMount = () => {
        /* fetching data from mock api */
        apis.getData().then((res)=>{
            this.setState({
              getMembers: res && res.members
            })
        }) 
    }

    handleOpen = (name, periods) => {
        const FORMAT = "MMM D YYYY HH:mm a"
        const events = [];
        if (periods && periods.length > 0) {
          periods.forEach(period => {
            events.push({
              start: moment(period.start_time, FORMAT).toDate(),
              end: moment(period.end_time, FORMAT).toDate(),
              title: name,
              allDay: false
            })
          });
        }
        this.setState({
            isModalVisible: true,
            name,
            events
        });
    };

    handleClose = () => {
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        const { classes } = this.props
        return(
            <div style={{backgroundColor: '#f7f7f7'}}>
                    <Container className={classes.cardGrid}>
                        <Grid container spacing={4}>
                            {this.state.getMembers.map((member) => (
                            <Grid item key={member.id} xs={8} sm={4} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={member.profile_url}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {member.real_name}
                                        </Typography>
                                        <Typography>
                                            {member.tz}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button color="primary" onClick={() => {this.handleOpen(member.real_name, member.activity_periods)}}>
                                        View
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                        <Modal
                            style={{marginTop: 50}}
                            bodyStyle={{height: 500}}
                            centered
                            width={1000}
                            title={this.state.name}
                            visible={this.state.isModalVisible}
                            onCancel={this.handleClose}
                            footer={[
                                <Button key="close" color="primary" onClick={this.handleClose}>
                                    Close
                                </Button>,
                            ]}
                        >   
                            <Scheduler events={this.state.events} name={this.state.name}/>
                        </Modal>
            </div>
        )

    }
}

UserGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  const styles = theme => ({
    cardGrid: {
      paddingTop: 50,
      paddingBottom: 50
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-1px -1px 0px 13px #FFFFFF',
      backgroundColor: '#f7f7f7'
    },
    cardMedia: {
      paddingTop: '100%',
    },
    cardContent: {
      flexGrow: 1,
    },
});

export default withStyles(styles)(UserGrid)