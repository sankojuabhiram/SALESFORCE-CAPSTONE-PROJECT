public with sharing class AppointmentController {
    @AuraEnabled(cacheable=true)
    public static List<Appointment__c> getUpcomingAppointments() {
        return [
            SELECT Id,
                   Name,
                   Appointment_Date_Time__c,
                   Status__c,
                   Duration_Minutes__c,
                   Patient__r.Name,
                   Doctor__r.Name
            FROM Appointment__c
            WHERE Appointment_Date_Time__c >= :Datetime.now()
            ORDER BY Appointment_Date_Time__c ASC
            LIMIT 50
        ];
    }
}
