import { LightningElement, api, wire } from 'lwc';
import getAttendeesList from '@salesforce/apex/AttendeeController.getAttendeesList';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email__c' },
    { label: 'Organization', fieldName: 'Organization__c' },
    { label: 'Role', fieldName: 'Role__c' }
];

export default class AttendeeList extends LightningElement {
    @api eventId;
    attendees;
    columns = COLUMNS;

    @wire(getAttendeesList, { eventId: '$eventId' })
    wiredAttendees({ data, error }) {
        if (data) {
            this.attendees = data;
        } else {
            console.error(error);
        }
    }
}