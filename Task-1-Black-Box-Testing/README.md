# Task 1: Test Scenarios and Black-Box Testing

## 1. Introduction

For this assignment, we selected the **Student Management System** as our application for testing.

It is a web-based application developed using Python and Flask. It helps users manage student records through a simple dashboard.

The purpose of this task is to test the application's features and check whether they work correctly for different inputs and situations.

## 2. Main Features of the Application

The Student Management System provides the following features:

1. **Add Student:** Allows users to add a new student by entering their name, roll number, class, marks, and contact number.
2. **View Students:** Displays the list of registered students and dashboard statistics.
3. **Search Students:** Allows users to find a student using their name or roll number.
4. **Edit Student:** Allows users to update the information of an existing student.
5. **Delete Student:** Allows users to remove a student record.

## 3. Selected Features for Testing

We selected these features because they involve different types of inputs and user actions. They also allow us to check how the application handles valid information, invalid information, and changes to student records.

The main features selected for testing are:

- **Add Student:** We tested the information entered by users, including names, marks, and contact numbers.
- **Search Students:** We checked whether the application can find existing students and handle searches with no matching results.
- **Edit Student:** We checked whether existing student information can be updated correctly.
- **Delete Student:** We checked whether a student record can be removed successfully.

## 4. Black-Box Testing Techniques

We applied the following six Black-Box Testing techniques:

### 4.1 Equivalence Partitioning

This technique divides input data into groups of valid and invalid values. We used it to test student names, marks, and contact numbers.

### 4.2 Boundary Value Analysis

This technique checks values at the limits of an allowed range. We used it to test marks at 0 and 100, as well as values just outside the range, such as -1 and 101.

### 4.3 Decision Table Testing

This technique checks different combinations of conditions and their expected results. We used it to check whether all required student fields must be filled before a record can be submitted.

### 4.4 State Transition Testing

This technique checks how an application behaves when it moves from one state to another. We used it to test the creation, editing, and deletion of student records.

### 4.5 Scenario-Based Testing

This technique tests a complete sequence of actions that a real user might perform. We tested a workflow involving adding, searching, editing, and deleting a student.

### 4.6 Error Guessing

This technique focuses on situations that may cause errors. We tested cases such as duplicate roll numbers, missing information, invalid names, and searches for students who do not exist.

## 5. Organization of Task 1

The Task 1 folder contains the following documentation:

- **README.md:** Provides an introduction to the application, its main features, and the testing techniques used.
- **test_scenarios.md:** Describes the six testing scenarios and explains how each technique is applied.
- **test_cases.md:** Contains the test cases, expected results, actual results, decision table, and test case derivation.

## 6. Conclusion

Black-Box Testing was used to evaluate the main features of the Student Management System without examining its internal code.

A total of 16 test cases were documented using six testing techniques. These tests cover student registration, input validation, searching, editing, deleting, and error handling.
