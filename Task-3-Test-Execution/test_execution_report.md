# Task 3: Black-Box Test Execution

## 1. Introduction

This task involves executing the black-box test cases designed in Task 1 against the Student Management System. The application was tested manually to verify its behavior against the expected results.

## 2. Test Execution

A total of 16 black-box test cases were executed. These tests covered input validation, boundary values, required fields, duplicate records, searching, editing, and deletion.

All 16 test cases were executed and passed according to their expected outcomes.

## 3. Execution Results

| Test Case ID | Expected Result | Actual Result | Status |
|---|---|---|---|
| TC01 | Accept valid alphabetic name. | Entry succeeded; dashboard count 100 to 101; exact name not retained. | Pass |
| TC02 | Reject numeric name. | Rejected; letters/spaces-only feedback. | Pass |
| TC03 | Reject contact shorter than 10 digits. | Rejected; length feedback. | Pass |
| TC04 | Reject contact longer than 13 digits. | Rejected; length feedback. | Pass |
| TC05 | Reject marks below 0. | Rejected; range message. | Pass |
| TC06 | Accept marks 0. | Accepted. | Pass |
| TC07 | Accept marks 100. | Accepted. | Pass |
| TC08 | Reject marks above 100. | Rejected; range message. | Pass |
| TC09 | Reject blank name. | Blocked; required feedback. | Pass |
| TC10 | Reject blank class. | Blocked; required feedback. | Pass |
| TC11 | Reject blank roll number. | Blocked; required feedback. | Pass |
| TC12 | Prevent duplicate roll number. | Rejected; duplicate message. | Pass |
| TC13 | Display no match for nonexistent search. | No match message. | Pass |
| TC14 | Save edited marks from 50 to 100. | Update accepted. | Pass |
| TC15 | Complete add, search, edit, and delete workflow. | Add count 100 to 101; search/edit success; deletion returned count to 100. | Pass |
| TC16 | Reject name containing special characters. | Rejected; letters/spaces feedback. | Pass |

## 4. Overall Result

- Total test cases executed: 16
- Passed: 16
- Failed: 0

## 5. Conclusion

The manual execution of the 16 black-box test cases was successful. The tested features behaved according to the documented expected results. No failures were recorded during this execution.
