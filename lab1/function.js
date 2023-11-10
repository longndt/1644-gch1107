//loại 1: function không có tham số (parameter) và không return value
//khai báo hàm
function hello() {
   console.log('Hello Greenwich Vietnam')
}
//gọi hàm
hello()
//khai báo hàm kiểu mới (ES6)
let welcome = () => {
   console.log('Welcome to Hanoi - the capital of Vietnam')
}
welcome()

//loại 2: function không có parameter nhưng có return
function getCurrentYear() {
   return 2023;
}
console.log('We are living in ' + getCurrentYear())

//loại 3: function có parameter nhưng không có return
function getTotal(a, b) {                  //a, b: parameter (tham số)
   console.log('Total : ' + (a+b))
}
getTotal(10, 20)                            //10, 20: argument (đối số)

//loại 4: function có cả parameter và return value
function sayHi(name) {
   return 'Hi ' + name + '. How are you today ?'
}
console.log(sayHi('Ronaldo'))

//parameter : input của function
//return    : output của function