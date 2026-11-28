# Black-Box Test Cases

This section presents the test cases designed to evaluate the Student Management System. The cases cover all six Black-Box Testing techniques.

## 1. Test Case Table

| Test Case ID | Technique | Feature | Input / Test Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|
| TC-01 | Equivalence Partitioning | Add Student | Valid alphabetic name used in student entry | Name should be accepted. | Name accepted during valid student entry. | Pass |
| TC-02 | Equivalence Partitioning | Add Student | Name: 12345 | Application should reject the name and display a validation message. | Application displayed a message asking for letters and spaces only. | Pass |
| TC-03 | Equivalence Partitioning | Add Student | Contact: 12345 | Application should reject a contact number shorter than 10 digits. | Application displayed "Enter 10 to 13 digits". | Pass |
| TC-04 | Equivalence Partitioning | Add Student | Contact: 12345678901234 | Application should reject a contact number longer than 13 digits. | Application displayed "Enter 10 to 13 digits". | Pass |
| TC-05 | Boundary Value Analysis | Add Student | Marks: -1 | Application should reject marks below 0. | Application displayed "Marks must be between 0 and 100". | Pass |
| TC-06 | Boundary Value Analysis | Add Student | Marks: 0 | Application should accept the minimum allowed marks. | Student record was added successfully. | Pass |
| TC-07 | Boundary Value Analysis | Add Student | Marks: 100 | Application should accept the maximum allowed marks. | Student record was added successfully. | Pass |
| TC-08 | Boundary Value Analysis | Add Student | Marks: 101 | Application should reject marks above 100. | Application displayed "Marks must be between 0 and 100". | Pass |
| TC-09 | Decision Table Testing | Add Student | Name field left empty; other fields valid | Application should reject the form and indicate that the name is required. | Application displayed "Name is required". | Pass |
| TC-10 | Decision Table Testing | Add Student | Class field left empty; other fields valid | Application should reject the form and indicate that the class is required. | Application displayed "Class is required". | Pass |
| TC-11 | Decision Table Testing | Add Student | Roll number field left empty; other fields valid | Application should reject the form and indicate that the roll number is required. | Application displayed "Roll number is required". | Pass |
| TC-12 | Error Guessing | Add Student | Duplicate roll number: SQE-TEST-001 | Application should prevent duplicate student records. | Application displayed that the roll number already exists. | Pass |
| TC-13 | Error Guessing | Search Students | Search: NONEXISTENT-999 | Application should display a message when no matching student exists. | Application displayed a no-matching-students message. | Pass |
| TC-14 | State Transition Testing | Edit Student | Change existing student's marks from 50 to 100. | Updated marks should be saved and displayed. | Marks were updated successfully. | Pass |
| TC-15 | Scenario-Based Testing | Student Management | Add, search, edit, and delete a student record. | All operations should complete successfully. | Student was added, searched, edited, and deleted successfully. | Pass |
| TC-16 | Error Guessing | Add Student | Name: John@123 | Application should reject special characters in the name. | Application displayed a message asking for letters and spaces only. | Pass |

## 2. Decision Table

The following table represents the expected behavior when required student fields are provided or missing.

| Rule | Name | Roll Number | Class | Marks | Contact | Expected Result |
|---|---|---|---|---|---|---|
| R1 | Valid | Valid | Valid | Valid | Valid | Accept record |
| R2 | Missing | Valid | Valid | Valid | Valid | Reject record |
| R3 | Valid | Missing | Valid | Valid | Valid | Reject record |
| R4 | Valid | Valid | Missing | Valid | Valid | Reject record |
| R5 | Valid | Valid | Valid | Missing | Valid | Reject record |
| R6 | Valid | Valid | Valid | Valid | Missing | Reject record |

## 3. Test Case Derivation

The test cases were derived from the application's input requirements and validation rules.

- Equivalence Partitioning: Inputs were divided into valid and invalid categories, such as valid and invalid names and contact numbers.
- Boundary Value Analysis: Values around the allowed marks range were selected: -1, 0, 100, and 101.
- Decision Table Testing: Required fields were checked individually to verify that missing information prevents submission.
- State Transition Testing: The student record was tested through its creation, editing, and deletion stages.
- Scenario-Based Testing: A complete student management workflow was performed.
- Error Guessing: Duplicate roll numbers, non-existent searches, and invalid names were tested to identify possible errors.

## 4. Summary

A total of 16 test cases have been documented using six Black-Box Testing techniques. The test cases cover student registration, input validation, searching, editing, deleting, and error handling.
