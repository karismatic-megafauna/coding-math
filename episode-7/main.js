var v1 = vector.create(10, 5);
// get'ers work
console.log("Get'ers work:")
console.log(v1.getX(), v1.getY());
console.log(v1.getAngle());
console.log(v1.getLength());

// Adding works
var v2 = vector.create(1, 1);
var v3 = v1.add(v2);
console.log('Adding works:')
console.log(v3.getX(), v3.getY());

// Subtracting works
var v4 = v3.subtract(v2);
console.log('Subtracting works:')
console.log(v4.getX(), v4.getY());

// Multiplication works
var v5 = v1.multiply(2);
console.log('Multiplication works:');
console.log(v5.getX(), v5.getY());

