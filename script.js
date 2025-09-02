function isSameType(value1, value2) {

  //your js code here
	iif (Number.isNaN(value1) && Number.isNaN(value2)) {
		return true;
	}

	// If only one is NaN, or if they are different types, they are not the same.
	// We also must ensure neither is NaN here, because typeof NaN is 'number',
	// which could give a false positive.
	if (!Number.isNaN(value1) && !Number.isNaN(value2) && typeof value1 === typeof value2) {
		return true;
	}

	// In all other cases, the types are not the same.
	return false;
}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
