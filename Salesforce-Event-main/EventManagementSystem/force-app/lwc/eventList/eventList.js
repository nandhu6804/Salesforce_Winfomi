import { LightningElement, wire } from 'lwc';
import getEventsList from '@salesforce/apex/EventController.getEventsList';

const COLUMNS = [
    { label: 'Event Name', fieldName: 'Name' },
    { label: 'Date', fieldName: 'Event_Date__c', type: 'date' },
    { label: 'Location', fieldName: 'Location__c' },
    {
        type: 'button',
        typeAttributes: {
            label: 'View Attendees',
            name: 'view_attendees',
            variant: 'brand'
        }
    }
];

export default class EventList extends LightningElement {
    events;
    columns = COLUMNS;

    @wire(getEventsList)
    wiredEvents({ data, error }) {
        if (data) {
            this.events = data;
        } else {
            console.error(error);
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        if (actionName === 'view_attendees') {
            const selectedEvent = new CustomEvent('eventselect', {
                detail: row.Id
            });
            this.dispatchEvent(selectedEvent);
        }
    }
}