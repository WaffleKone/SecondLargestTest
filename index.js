let myArr = [12, 7, 32, 48, 500, 504, 1]
let myArrChanged = myArr
let timesClicked = 0

let largestNum = myArr[0]
let secondLargestNum = myArr[0]

let header = document.createElement('h1')
header.textContent = 'Click Me!'
document.body.append(header)

let paragraph = document.createElement('p')
paragraph.textContent = ('The array is ' + myArr)
paragraph.style.fontSize = 20
document.body.append(paragraph)

let LargFound = document.createElement('p')
LargFound.style.fontSize = 20


console.log ("This is the current array:", myArr)
// event listeners for the header element
header.addEventListener('click', secondLargFinder)

header.addEventListener('click', changeText)

header.addEventListener('mouseover', function() {
  header.style.color = 'blue'
})
header.addEventListener('mouseout', function() {
  header.style.color = 'black'
})
// Below is the function used to sort through the array and find the second largest number in it, then print that to console and change html text to match it.
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
document.body.append(LargFound)
LargFound.textContent = ('The second largest number is ' + secondLargestNum)
}

// This function changes the text of elements it is called to so it can track how many times it has been clicked.
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

