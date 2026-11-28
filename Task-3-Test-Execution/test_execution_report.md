# Task 3: Black-Box Test Execution Report

## 1. Introduction

This task focuses on the manual execution of the black-box test cases designed in Task 1 against the Student Management System.

The purpose of testing was to verify that the application behaves according to the specified requirements and produces the expected results for valid and invalid inputs.

A total of 16 black-box test cases were executed using different testing techniques.

## 2. Test Execution Approach

The test cases were executed manually through the Student Management System's web interface.

The testing covered the following functionalities:

- Student registration and input validation.
- Validation of contact numbers.
- Boundary value testing for student marks.
- Required field validation.
- Duplicate roll number detection.
- Student record searching.
- Editing existing student records.
- Deleting student records.
- Complete student management workflow.
- Handling of invalid inputs and special characters.

Each test case was executed by providing the specified input and comparing the application's actual response with the expected result.

## 3. Detailed Test Execution Records

The complete test execution records are maintained in the Excel workbook:

**File:** `SQE_Assignment3.xlsx`

The workbook contains the following relevant sheets:

### 3.1 Test Cases Sheet

The Test Cases sheet contains all 16 executed test cases, including:

- Test Case ID
- Test input or action performed
- Expected result
- Actual result
- Execution status (PASS/FAIL)

### 3.2 Simple Results Sheet

The Simple Results sheet provides a summary of the overall test execution, including the total number of test cases, passed cases, failed cases, and untested cases.

## 4. Execution Results

The execution results are summarized below:

| Test Case ID | Expected Result | Actual Result | Status |
|---|---|---|---|
| TC01 | Accept valid alphabetic name. | Entry succeeded; dashboard count increased from 100 to 101. | PASS |
| TC02 | Reject numeric name. | Rejected; letters and spaces-only feedback displayed. | PASS |
| TC03 | Reject contact shorter than 10 digits. | Rejected; contact length feedback displayed. | PASS |
| TC04 | Reject contact longer than 13 digits. | Rejected; contact length feedback displayed. | PASS |
| TC05 | Reject marks below 0. | Rejected; marks range validation displayed. | PASS |
| TC06 | Accept marks equal to 0. | Accepted successfully. | PASS |
| TC07 | Accept marks equal to 100. | Accepted successfully. | PASS |
| TC08 | Reject marks above 100. | Rejected; marks range validation displayed. | PASS |
| TC09 | Reject blank name. | Submission blocked; required field feedback displayed. | PASS |
| TC10 | Reject blank class. | Submission blocked; required field feedback displayed. | PASS |
| TC11 | Reject blank roll number. | Submission blocked; required field feedback displayed. | PASS |
| TC12 | Prevent duplicate roll number. | Rejected; duplicate roll number message displayed. | PASS |
| TC13 | Display no matching result for a nonexistent search. | No matching student message displayed. | PASS |
| TC14 | Save edited marks from 50 to 100. | Update accepted successfully. | PASS |
| TC15 | Complete add, search, edit, and delete workflow. | All operations succeeded; dashboard count returned from 101 to 100. | PASS |
| TC16 | Reject a name containing special characters. | Rejected; letters and spaces-only feedback displayed. | PASS |

## 5. Overall Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 16 |
| Passed Test Cases | 16 |
| Failed Test Cases | 0 |
| Not Tested | 0 |
| Execution Success Rate | 100% |

All 16 test cases passed successfully.

## 6. Test Execution Evidence

The project includes the following screenshot evidence:

**Task3_01_Initial_Application_Dashboard.jpeg**

This screenshot provides visual evidence of the Student Management System's initial dashboard before the test execution activities.

The detailed test inputs and execution outcomes are additionally documented in `SQE_Assignment3.xlsx`.

## 7. Conclusion

The manual execution of all 16 black-box test cases was completed successfully.

The testing covered student registration, input validation, boundary conditions, duplicate record handling, searching, editing, deletion, and error handling.

All actual results matched their corresponding expected results. No failed test cases were recorded.

The execution results demonstrate that the tested functionalities of the Student Management System behaved as expected during the recorded testing activities.
