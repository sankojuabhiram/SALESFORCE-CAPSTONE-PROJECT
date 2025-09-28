# 🏥 MediCare Connect – Patient Appointment & Follow-Up CRM  

 🔗Demo Video: https://drive.google.com/file/d/1ezLBNatMwuPOwQcfqtiKQBd6Gia8qag_/view?usp=sharing

A Salesforce Lightning application to streamline **doctor availability, appointment scheduling, medical case management, and follow-ups** for healthcare providers.  

---

## 🚀 Features

- **Centralized Data Model**  
  Manage Doctors, Patients (Contacts), Appointments, and Medical Cases in one place.

- **Role-Based Access**  
  Profiles for Admin, Doctor, and Receptionist with Field-Level Security to protect sensitive data.

- **Automation**  
  - Record-Triggered Flows for appointment confirmations and reminders  
  - Validation Rules to prevent past appointments  
  - Quick Action to mark appointments as completed  
  - Platform Events & Change Data Capture for integrations

- **External Integration**  
  Connected App + Named Credential for secure API callouts.  
  (Demoed with httpbin.org; ready for real SMS/EHR APIs)

- **Data Management**  
  Data Import Wizard for sample patient data, Duplicate Rules for data quality, and manual Data Export backups.  
  Documented Data Loader, Change Sets, Packages, ANT, and SFDX for future deployment.

- **Reports & Dashboards**  
  Custom Report Type “Appointments with Patients”; Tabular, Summary, Matrix reports; Dynamic Dashboard showing upcoming appointments per Doctor.

---

## 🛠️ Built With

- Salesforce Lightning Experience (Developer Org)
- Lightning App Builder & Record Pages
- Flows, Validation Rules, Quick Actions
- Apex Classes & Triggers
- Platform Events & CDC
- Salesforce Connect
- VS Code + Salesforce CLI (SFDX)

---

## 📂 Project Structure (Phases)

| Phase | Description |
|-------|-------------|
| 1 | Problem Understanding & Industry Analysis |
| 2 | Org Setup & Configuration (Company Info, Users, Profiles, Roles, OWD, Sharing) |
| 3 | Data Modelling & Relationships (Objects, Fields, Page Layouts, Schema Builder) |
| 4 | Process Automation (Validation Rules, Flows, Email Templates, Quick Actions) |
| 5 | Apex Programming (Service Class, Trigger, Test Class, Batch Apex) |
| 6 | User Interface Development (Lightning Pages, Home Page, Utility Bar, Custom LWC) |
| 7 | Integration & External Access (Connected App, Named Credential, Callouts, Platform Events, CDC) |
| 8 | Data Management & Deployment (Import Wizard, Duplicate Rules, Export, Packages, ANT, SFDX) |
| 9 | Reporting, Dashboards & Security Review (Reports, Dynamic Dashboards, Field-Level Security, Session Settings, Audit Trail) |

---

