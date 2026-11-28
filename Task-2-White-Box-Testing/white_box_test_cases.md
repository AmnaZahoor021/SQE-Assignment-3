# Task 2: White-Box Test Cases

The following test cases are designed to execute all seven independent paths of the `validate_student(data)` function.

| Test Case | Path | Input / Test Data | Expected Result |
|---|---|---|---|
| WB-01 | P1 | `None` | Function returns an invalid request error because the input is not a dictionary. |
| WB-02 | P2 | `{}` | Function returns an error because required fields are missing. |
| WB-03 | P3 | Name: `John123`, other fields valid. | Function returns a name validation error. |
| WB-04 | P4 | Name: `John Smith`, Marks: `abc`, other fields valid. | Function returns a marks must be a number error. |
| WB-05 | P5 | Name: `John Smith`, Marks: `101`, other fields valid. | Function returns a marks range error. |
| WB-06 | P6 | Name: `John Smith`, Marks: `85`, Contact: `12345`, other fields valid. | Function returns a contact validation error. |
| WB-07 | P7 | Name: `John Smith`, Roll No: `WB-001`, Class: `BSE-3A`, Marks: `85`, Contact: `03001234567`. | Function returns cleaned student data successfully. |

## Conclusion

These seven test cases cover all independent execution paths identified in the Control Flow Graph. They test both invalid inputs and successful execution of the selected function.

## Test Execution Results

All seven white-box test cases were executed using the `run_white_box_tests.py` script.

| Result | Count |
|---|---:|
| Total Test Cases | 7 |
| Passed | 7 |
| Failed | 0 |

**Overall Result: PASS**

All test cases produced their expected results. Therefore, all seven identified execution paths were successfully tested.
