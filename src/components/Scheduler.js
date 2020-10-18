import moment from 'moment'
import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
moment.locale('en-GB')
const localizer = momentLocalizer(moment)

class Scheduler extends Component {
    render() {
        return (
            <>
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="day"
                events={this.props.events}
                views={{ month: true, week: true, day: true }}
                step={120}
              />
            </>
          )
    }
}

export default Scheduler