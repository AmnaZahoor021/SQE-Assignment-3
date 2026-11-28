## 4. Explanation of the Control Flow

1. Input Type Validation: Checks whether the input is a dictionary.
2. Field Extraction: Extracts the student information.
3. Required Fields Validation: Checks whether all required fields are provided.
4. Name Validation: Checks whether the name contains permitted characters.
5. Marks Conversion: Converts marks into a number. If conversion fails, an error is returned.
6. Marks Range Validation: Checks whether marks are between 0 and 100.
7. Contact Validation: Checks whether the contact number contains 10 to 13 digits.
8. Successful Execution: If all checks pass, cleaned student data is returned.

Each unsuccessful validation returns an error immediately.

## 5. Decision Points

The function contains six decision points:

| No. | Decision Point | Possible Outcomes |
|---|---|---|
| 1 | Is input a dictionary? | Yes / No |
| 2 | Are all required fields provided? | Yes / No |
| 3 | Is the name valid? | Yes / No |
| 4 | Is marks conversion successful? | Success / Exception |
| 5 | Are marks between 0 and 100? | Yes / No |
| 6 | Is the contact number valid? | Yes / No |

## 6. Cyclomatic Complexity

Cyclomatic Complexity measures the number of independent paths through a function.

Formula:

M = D + 1

Where D is the number of decision points.

D = 6

M = 6 + 1

**Cyclomatic Complexity = 7**

Therefore, the function has seven independent execution paths.

Note: Each compound Boolean condition is treated as one decision point.
