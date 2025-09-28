import { LightningElement, wire, track } from 'lwc';
import getUpcomingAppointments from '@salesforce/apex/AppointmentController.getUpcomingAppointments';

export default class AppointmentCalendar extends LightningElement {
    @track appointments = [];
    @track error;

    columns = [
        { label: 'Patient', fieldName: 'PatientName' },
        { label: 'Doctor', fieldName: 'DoctorName' },
        {
            label: 'Date/Time',
            fieldName: 'AppointmentDateTime',
            type: 'date',
            typeAttributes: {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }
        },
        { label: 'Status', fieldName: 'Status' },
        { label: 'Duration (min)', fieldName: 'Duration' }
    ];

    // getter to use in template
    get noAppointments() {
        return this.appointments && this.appointments.length === 0 && !this.error;
    }

    @wire(getUpcomingAppointments)
    wiredAppointments({ data, error }) {
        if (data) {
            this.appointments = data.map(a => ({
                Id: a.Id,
                PatientName: a.Patient__r ? a.Patient__r.Name : '',
                DoctorName: a.Doctor__r ? a.Doctor__r.Name : '',
                AppointmentDateTime: a.Appointment_Date_Time__c,
                Status: a.Status__c,
                Duration: a.Duration_Minutes__c
            }));
            this.error = undefined;
        } else if (error) {
            this.error = error.body ? error.body.message : error;
            this.appointments = [];
        }
    }
}
