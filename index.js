let myArr = [12, 7, 32, 48, 500, 504, 1]

let timesClicked = 0

let largestNum = myArr[0]
let secondLargestNum = myArr[0]

let header = document.createElement('h1')
header.textContent = 'Click Me! also check console lol'
document.body.append(header)

console.log ("This is the current array:", myArr)

header.addEventListener('click', secondLargFinder)

header.addEventListener('click', changeText)

header.addEventListener('mouseover', function() {
  header.style.color = 'blue'
})
header.addEventListener('mouseout', function() {
  header.style.color = 'black'
})

function secondLargFinder() {
    console.log('secondLargFinder was called!')
for (i=0; i<myArr.length; i++) {
    if (myArr[i] > largestNum) {
        secondLargestNum = largestNum
        largestNum = myArr[i]
        
    }
    else if (myArr[i]>secondLargestNum && myArr[i] !=largestNum) {
        secondLargestNum = myArr[i]
    }
}
console.log(secondLargestNum)
}
function changeText(e) {
  if (timesClicked == 68) {
    timesClicked += 1
    e.target.textContent = ("nice")
  }
  else {
    timesClicked += 1
    e.target.textContent = ("I have been clicked " + timesClicked + " times!")
  }
}

