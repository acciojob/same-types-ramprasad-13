function isSameType(value1, value2) {
    // Check if both values are NaN
    if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
        return true; // Both are NaN
    }

    // Function to check if a string represents a valid number
    const isNumericString = (value) => {
        return !isNaN(value) && value.trim() !== '' && !isNaN(Number(value));
    };

    // Check if both values are numeric strings
    const isNumeric1 = isNumericString(value1);
    const isNumeric2 = isNumericString(value2);

    // If both are numeric strings, return true
    if (isNumeric1 && isNumeric2) {
        return true; // Both are numbers
    }

    // Check if both values are non-numeric strings
    if (typeof value1 === 'string' && typeof value2 === 'string' && !isNumeric1 && !isNumeric2) {
        return true; // Both are non-numeric strings
    }

    // If one is a numeric string and the other is a non-numeric string, return false
    return false;
}
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));