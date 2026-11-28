import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from application.app import validate_student

test_cases = [
    ("WB-01", None, "Invalid request: JSON data expected."),

    ("WB-02", {}, "All fields are required."),

    ("WB-03", {
        "name": "John123",
        "roll_no": "WB-003",
        "class_name": "BSE-3A",
        "marks": 85,
        "contact": "03001234567"
    }, "Name may contain only letters and spaces."),

    ("WB-04", {
        "name": "John Smith",
        "roll_no": "WB-004",
        "class_name": "BSE-3A",
        "marks": "abc",
        "contact": "03001234567"
    }, "Marks must be a number."),

    ("WB-05", {
        "name": "John Smith",
        "roll_no": "WB-005",
        "class_name": "BSE-3A",
        "marks": 101,
        "contact": "03001234567"
    }, "Marks must be between 0 and 100."),

    ("WB-06", {
        "name": "John Smith",
        "roll_no": "WB-006",
        "class_name": "BSE-3A",
        "marks": 85,
        "contact": "12345"
    }, "Contact number must have 10 to 13 digits."),

    ("WB-07", {
        "name": "John Smith",
        "roll_no": "WB-007",
        "class_name": "BSE-3A",
        "marks": 85,
        "contact": "03001234567"
    }, None)
]

print("\nWHITE-BOX TEST EXECUTION")
print("-" * 50)

passed = 0

for test_id, data, expected_error in test_cases:
    clean_data, error = validate_student(data)

    if error == expected_error:
        print(f"{test_id}: PASS")
        passed += 1
    else:
        print(f"{test_id}: FAIL")
        print(f"Expected: {expected_error}")
        print(f"Actual:   {error}")

print("-" * 50)
print(f"Total: {len(test_cases)}")
print(f"Passed: {passed}")
print(f"Failed: {len(test_cases) - passed}")
