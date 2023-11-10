//cách 1
a = 3

//cách 2 (var : global variable)
var b = 5

//cách 3 (let : local variable)
let c = 10

//cách 4 (const - hằng số)
const PI = 3.14

//calculation
a = 5
b = 6
c = a + b
console.log('a + b = ' + c)   // + : concatenation
console.log(`a + b = ${c}`)

a = 17
b = 3
console.log('a % b = ' + (a % b));  // % : modulus (get remainder of a division)

a = 3
a += 2  // a = a + 2
console.log('a = ' + a)

x = 1
y = x++  //postfix operator : y=x=1 ; x=x++=x+1=2
z = ++x  //prefix operator  : ++x=x+1=3 ; z=x=3
console.log('x = ' + x)  // 3
console.log('y = ' + y)  // 1
console.log('z = ' + z)  // 3


