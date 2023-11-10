let grade = 7.5
if (grade >= 5.0)
   console.log('Pass')
else {
   console.log('Fail')
   console.log('Prepare money for retake class')
}

/*
   Distinction: 9.0 - 10.0
   Merit      : 8.0 - 8.9
   Pass       : 6.5 - 7.9
   Refer      : 0 - 6.5
*/
let gpa = 20
// if (9.0 <= gpa <= 10.0)
//    console.log('distinction')

if (gpa >= 9.0 && gpa <= 10.0)
   console.log('distinction')
else if (gpa >= 8.0)
   console.log('merit')
else if (gpa >= 6.5)
   console.log('pass')
else if (gpa >= 0)
   console.log('refer')
else
   console.log('invalid grade')

var country = "Vietnam"
switch (country) {
   case "Vietnam":
      console.log('Country : Vietnam')
      console.log('Capital : Hanoi')
      break;
   case "Thailand":
      console.log('Country : Thailand')
      console.log('Capital : Bangkok')
      break;
   case "United States":
      console.log('Country : United States')
      console.log('Capital : Washington DC.')
      break;
   default:
      console.log('Invalid country')
      break;
}