# Black-Box Testing Scenarios

This section defines the test scenarios selected for evaluating the Student Management System using six Black-Box Testing techniques.

## Scenario 1: Equivalence Partitioning (EP)

**Feature:** Add Student

**Objective:** Divide input data into valid and invalid groups and check whether the application handles each group correctly.

**Input categories:**
- Valid name: A name containing letters and spaces.
- Invalid name: A name containing numbers or special characters.
- Valid marks: A numeric value between 0 and 100.
- Invalid marks: A value below 0, above 100, or non-numeric.
- Valid contact: A contact number containing 10 to 13 digits.
- Invalid contact: A contact number containing fewer than 10 or more than 13 digits.

## Scenario 2: Boundary Value Analysis (BVA)

**Feature:** Add Student

**Objective:** Test values at and around the minimum and maximum allowed marks.

**Selected boundary values:**
- -1: Just below the minimum.
- 0: Minimum allowed value.
- 100: Maximum allowed value.
- 101: Just above the maximum.

**Expected behavior:** Marks from 0 to 100 should be accepted, while values outside this range should be rejected.

## Scenario 3: Decision Table Testing

**Feature:** Add Student

**Objective:** Verify that the application checks required fields before accepting a student record.

**Conditions:**
- Name is provided.
- Roll number is provided.
- Class is provided.
- Marks are provided.
- Contact number is provided.

**Expected behavior:** The application should accept a record only when all required fields contain valid data. If a required field is missing, the application should display an appropriate validation message.

## Scenario 4: State Transition Testing

**Feature:** Student Record Management

**Objective:** Verify that a student record moves correctly between different states during its lifecycle.

**States and transitions:**
1. Student record does not exist.
2. A new record is added successfully.
3. The record exists and can be searched.
4. The record is edited and updated.
5. The record is deleted.
6. The deleted record no longer exists.

**Expected behavior:** Each operation should produce the correct change in the student record.

## Scenario 5: Scenario-Based Testing

**Feature:** Complete Student Management Workflow

**Objective:** Test a realistic sequence of actions performed by a user.

**Test workflow:**
1. Open the Student Management System.
2. Add a new student.
3. Search for the newly added student.
4. Edit the student's marks.
5. Verify that the updated marks are displayed.
6. Delete the student.
7. Verify that the student record is no longer displayed.

**Expected behavior:** All operations should complete successfully, and the student information should remain consistent throughout the workflow.

## Scenario 6: Error Guessing

**Feature:** Add Student and Search Students

**Objective:** Identify possible errors by testing unusual, invalid, or unexpected inputs.

**Selected situations:**
- Entering an already existing roll number.
- Searching for a student who does not exist.
- Submitting the form with missing fields.
- Entering numbers or special characters in the name field.
- Entering a contact number with an invalid length.

**Expected behavior:** The application should handle these situations gracefully, display suitable error messages, and avoid creating invalid or duplicate records.
