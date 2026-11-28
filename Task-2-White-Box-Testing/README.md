# Task 2: Basic White-Box Testing

## 1. Introduction

In this task, we perform White-Box Testing on the Student Management System.

White-Box Testing focuses on the internal structure and logic of the source code. It helps us understand how a function works and whether its different execution paths behave correctly.

For this analysis, we selected one function from the application's source code.

## 2. Selected Function

**Function Name:** `validate_student(data)`

**File Name:** `application/app.py`

### Purpose of the Function

The `validate_student(data)` function checks the information entered when adding a new student.

It verifies that the provided information is complete and valid before allowing the student record to be saved.

### Main Checks Performed by the Function

The function performs the following checks:

1. **Input Type:** Checks whether the received data is in dictionary format.
2. **Required Fields:** Checks whether name, roll number, class, contact number, and marks have been provided.
3. **Name Validation:** Checks whether the name contains only allowed characters.
4. **Marks Conversion:** Checks whether the entered marks can be converted into a number.
5. **Marks Range:** Checks whether marks are between 0 and 100.
6. **Contact Validation:** Checks whether the contact number contains 10 to 13 digits.

If the information is valid, the function returns the cleaned student data. Otherwise, it returns an appropriate error message.

## 3. Reason for Selecting This Function

We selected this function because it contains multiple conditional statements and different return points.

These conditions create different execution paths, making the function suitable for:

- Control Flow Graph (CFG).
- Cyclomatic Complexity calculation.
- Identification of independent execution paths.
- White-Box test case design.
