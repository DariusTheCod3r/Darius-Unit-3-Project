/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');
let button = document.querySelector('.buttons');
let yesButton = document.querySelector('.option-one');
let noButton = document.querySelector('.option-two');
let optiononeScreen = document.querySelector('.option-one-screen');
let optiontwoScreen = document.querySelector('.option-two-screen');
let optiononeEnd = document.querySelector('.option-one-end');
let optiontwoEnd = document.querySelector('.option-two-end');
let optiononeButtonEnd = document.querySelector('.optiononeendbutton');
let optiontwoButtonEnd = document.querySelector('.optiontwoendbutton');
  
yesButton.onclick = function(){
  storyOpening.style.display = 'none';
  button.style.display = 'none';
  optiononeScreen.style.display = 'block';
  optiononeEnd.style.display = 'none';
};

noButton.onclick = function(){
  storyOpening.style.display = 'none'
  button.style.display = 'none';
  optiontwoScreen.style.display = 'block';
  optiontwoEnd.style.display = 'none';
};

optiononeButtonEnd.onclick = function(){
  storyOpening.style.display = 'none';
  optiononeScreen.style.display = 'none';
  optiononeEnd.style.display = 'block';
};

optiontwoButtonEnd.onclick = function(){
  storyOpening.style.display = 'none';
  optiontwoScreen.style.display = 'none';
  optiontwoEnd.style.display = 'block';
  
}
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
