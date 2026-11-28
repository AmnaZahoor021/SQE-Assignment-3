# Task 2: Independent Execution Paths

An independent execution path is a unique path through the function's control flow. Our selected function has seven independent paths.

| Path | Input / Condition | Expected Result |
|---|---|---|
| P1 | Input is not a dictionary, such as `None`. | Invalid request: JSON data expected. |
| P2 | One or more required fields are missing. | All fields are required. |
| P3 | Student name contains invalid characters, such as `John123`. | Name validation error. |
| P4 | Marks cannot be converted into a number, such as `abc`. | Marks must be a number. |
| P5 | Marks are outside the range 0–100, such as `101`. | Marks must be between 0 and 100. |
| P6 | Contact number contains fewer than 10 digits, such as `12345`. | Contact number validation error. |
| P7 | All provided student information is valid. | Cleaned student data is returned successfully. |

Each path tests a different outcome of the selected function. Together, these paths cover all six decision points and the successful execution of the function.
