public with sharing class AttendeeController {
    @AuraEnabled(cacheable=true)
    public static List<Attendee__c> getAttendeesList(Id eventId) {
        return [
            SELECT Id, Name, Email__c, Organization__c, Role__c 
            FROM Attendee__c 
            WHERE Event__c = :eventId
        ];
    }
}