var sports = ["football", "badminton", "swimming", "tennis"]
console.log(sports)
console.log(sports[1])
sports.forEach(displayList)

function displayList(item, index) {
   console.log((index+1) + ' : ' + item)
}