import { LightningElement } from 'lwc';

export default class EventDashboard extends LightningElement {
    selectedEventId;

    handleEventSelect(event) {
        this.selectedEventId = event.detail;
    }
}