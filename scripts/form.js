
var colorButton = document.querySelector('#colorChoices');

var answers = {};

// console.log(colorButton);


function formNavigation() {
  //find current active element
  var item = document.querySelector('form#websiteForm li.active');

  // Determine which question we are on be checking the child inputs

  if (item.querySelector('#fullName') !== null) {
    if(validateName()){
      answers.questionOne = item.querySelector('#fullName').value;
      item.classList.remove('active');
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
         }else{
          //  When we have no more questions we show the review page.
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
          console.log('Done');
        }
    }else{
      item.querySelector('#fullName').classList.add('required');
    }
  }

  if (item.querySelector('#email') !== null) {
    if(validateEmail()){
      answers.questionTwo = item.querySelector('#email').value;
      item.classList.remove('active');
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
         }else{
          //  When we have no more questions we show the review page.
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
          console.log('Done');
        }
    }else{
      item.querySelector('#email').classList.add('required');
    }
  }

  if (item.querySelector('.web-priority') !== null) {
    answers.questionThree = item.querySelector('.web-priority input[name=websitePriority]').value;
    item.classList.remove('active');
    // Check if another list element (question) exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
    }else{
     //  When we have no more questions we show the review page.
      var formReview = document.querySelector('#review');
      formReview.style.top = 0;
      console.log('Done');
    }

  }

  if (item.querySelector('#websiteColor') !== null) {
    answers.questionFour = item.querySelector('#websiteColor').value;
    item.classList.remove('active');
    // Check if another list element (question) exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
    }else{
     //  When we have no more questions we show the review page.
      var formReview = document.querySelector('#review');
      formReview.style.top = 0;
      console.log('Done');
    }

  }

  if (item.querySelector('#websiteDesc') !== null) {
    if(validateDesc()){
      answers.questionFive = item.querySelector('#websiteDesc').value;
      item.classList.remove('active');
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
         }else{
          //  When we have no more questions we show the review page.
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
          console.log('Done');
        }
    }else{
      item.querySelector('#websiteDesc').classList.add('required');
    }
  }

  if (item.querySelector('#budget') !== null) {
    if(validateBudget()){
      answers.questionSix = item.querySelector('#budget').value;
      item.classList.remove('active');
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
         }else{
          //  When we have no more questions we show the review page.
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
          console.log('Done');
        }
    }else{
      item.querySelector('#budget').classList.add('required');
    }
  }

  console.log(answers);

} //end form naviagtion

function validateName(){
  var name = document.querySelector('#fullName');
  if(name.value){
    return true;
  }else{
    return false;
  }
}

function validateEmail(){
  var name = document.querySelector('#email');
  if(email.value){
    return true;
  }else{
    return false;
  }
}

function validateDesc(){
  var desc = document.querySelector('#websiteDesc');
  if(desc.value){
    return true;
  }else{
    return false;
  }
}

function validateBudget(){
  var budget = document.querySelector('#budget');
  if(budget.value){
    return true;
  }else{
    return false;
  }
}

function setColorPlaceholderBackground(){
  var colorOptions = document.querySelector('#websiteColor');
  var placeholder = document.querySelector('#colorChoices .color');
  var colorLabel = document.querySelector('#colorChoices .color-code span');
  placeholder.style.background = colorOptions.value;
  colorLabel.innerHTML = colorOptions.value;
}

setColorPlaceholderBackground();

function setColorChoiceBackgrounds(){
  var colorsList = document.getElementsByClassName('color-thumb');
  for(var i = 0; i < colorsList.length; i++){
    var bg = colorsList[i].getAttribute('data-value');
    colorsList[i].style.background = bg;
  }
}

setColorChoiceBackgrounds();



//Event listeners

colorButton.addEventListener('click', function showColors(){
  // console.log('Inside function');
  var choices = document.querySelector('#colorListing');
  choices.style.top = 0;
  choices.style.left = 0;
});

function handleColorClick(event){
		event = event || window.event;
		event.target = event.target || event.srcElement;
		var element = event.target;

    if(element.className === 'color-thumb') {
      var result = element.getAttribute('data-value');
      var selectVal = document.querySelector('#websiteColor');
      selectVal.value = result;
      setColorPlaceholderBackground();
      var choices = document.querySelector('#colorListing');
      choices.style.top = '-5000px';
      choices.style.left = 0;
      // console.log(selectVal.value);
    }
	}

  document.addEventListener('click', handleColorClick, true);
