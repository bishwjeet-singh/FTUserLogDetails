import React from 'react'
import mobiscroll from '@mobiscroll/react-lite'
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css'

export default class SyncView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            view: 'month',
            myEvents: [{
                start: new Date(2020, 1, 1),
                end: new Date(2020, 1, 2),
                text: 'Conference',
                color: 'red'
            }, {
                d: '12/25',
                text: 'Christmas'
            }],
            calView: {
                calendar: { type: 'month' },
                eventList: { type: 'month', scrollable: true }
            }
        }
    }

    changeView = (event) => {
        var view;
        switch (event.target.value) {
            case 'month':
                view = {
                    calendar: { type: 'month' },
                    eventList: { type: 'month', scrollable: true }
                };
                break;
            case 'week':
                view = {
                    calendar: { type: 'week' },
                    eventList: { type: 'week', scrollable: true }
                };
                break;
            case 'day':
                view = {
                    eventList: { type: 'day', scrollable: true }
                };
                break;
        }
    
        this.setState({
            view: event.target.value,
            calView: view
        });
    }

    render() {
        return (
            <>
            <mobiscroll.Form>
            <mobiscroll.Segmented value="month" name="view" checked={this.state.view === 'month'} onChange={() => {this.changeView()}}>
                Month
            </mobiscroll.Segmented>
            <mobiscroll.Segmented value="week" name="view" checked={this.state.view === 'week'} onChange={() => {this.changeView()}}>
                Week
            </mobiscroll.Segmented>
            <mobiscroll.Segmented value="day" name="view" checked={this.state.view === 'day'} onChange={() => {this.changeView()}}>
                Day
            </mobiscroll.Segmented>
            </mobiscroll.Form>
            <mobiscroll.Eventcalendar
                display="inline"
                view='month'
                data={[{
                    d: '12/25',
                    text: 'Christmas'
                }]}
            />
            </>
        );
    }    
}