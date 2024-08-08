console.log("Script running...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully
let button = document.querySelector("#clear")
console.log(button)

// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let pTags = document.querySelectorAll(".lightbulb")
console.log(pTags.length)

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black
for(let i=0;i<pTags.length;i++){
button.addEventListener("click", function(event){
  console.log("button clicked")
  pTags[i].style.backgroundColor = "black"
  })
  }




// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
// Make sure to add an ID so you can select this button
let button2 = document.querySelector("#csh")
console.log(button2)

// Select the body and console log to confirm you selected successfully
let body= document.body

// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"
button2.addEventListener("mouseover", function(event){
  for(let i=0;i<pTags.length;i++){
  body.style.backgroundColor ="green"
    pTags[i].textContent="💻"
  }
  })
// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"
button2.addEventListener("mouseout", function(event){
  for(let i=0;i<pTags.length;i++){
  body.style.backgroundColor ="black"
    pTags[i].textContent="💡"
  }
  })


// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white
for(let i=0;i<pTags.length;i++){
pTags[i].addEventListener("click", function(event){
  pTags[i].style.backgroundColor = "white"
})
}






// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb






