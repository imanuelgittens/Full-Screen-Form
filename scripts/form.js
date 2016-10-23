
var colorButton = document.querySelector('#colorChoices');
var reviewColorButton = document.querySelector('#reviewColorChoices');
var finishButton = document.querySelector('#finish');

var answers = {};

// console.log(colorButton);
function submitData(){

}


function reviewValues(){
  setReviewColorPlaceholderBackground();
  var formReview = document.querySelector('#review');
  formReview.querySelector('#reviewName').value = answers.questionOne;
  formReview.querySelector('#reviewEmail').value = answers.questionTwo;
  var websitePriorities = formReview.getElementsByClassName('reviewPriorities');
  console.log(websitePriorities);
  for(var i = 0; i < websitePriorities.length; i++){
    if (websitePriorities[i].value === answers.questionThree){
      websitePriorities[i].setAttribute('checked', 'checked');
    }

  }
  formReview.querySelector('#reviewColorChoices').value = answers.questionFour;
  formReview.querySelector('#reviewDesc').value = answers.questionFive;
  formReview.querySelector('#reviewBudget').value = answers.questionSix;
}


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
           reviewValues();
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
           reviewValues();
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
          console.log('Done');
        }
    }else{
      item.querySelector('#email').classList.add('required');
    }
  }

  if (item.querySelector('.web-priority') !== null) {
    var choices = item.getElementsByClassName('priority');

    for(var i = 0; i < choices.length; i++){
      if(choices[i].checked){
        answers.questionThree = choices[i].value;
      }
    }

    item.classList.remove('active');
    // Check if another list element (question) exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
    }else{
     //  When we have no more questions we show the review page.
      reviewValues();
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
      reviewValues();
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
           reviewValues();
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
           reviewValues();
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

function setReviewColorPlaceholderBackground(){
  var placeholder = document.querySelector('#reviewColorChoices .color');
  var colorLabel = document.querySelector('#reviewColorChoices .color-code span');
  placeholder.style.background = answers.questionFour;
  colorLabel.innerHTML = answers.questionFour;
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
  choices.style.right = 0;
  choices.style.bottom = 0;
});

reviewColorButton.addEventListener('click', function showReviewColors(){

  var choices = document.querySelector('#colorListing');
  console.log(choices);
  choices.style.top = 0;
  choices.style.left = 0;
  choices.style.right = 0;
  choices.style.bottom = 0;
  choices.style.zIndex = 3000;
});

function saveData(event){
  event.preventDefault();
  event = event || window.event;
  event.target = event.target || event.srcElement;
  var element = event.target;

  console.log(element.id);
  if(element.id === 'review'){
    var reviewForm = document.querySelector('#review');
    answers.questionOne = reviewForm.querySelector('#reviewName').value;
    answers.questionTwo = reviewForm.querySelector('#reviewEmail').value;
    var reviewPriorities = reviewForm.getElementsByClassName('reviewPriorities');

    for(var i = 0; i < reviewPriorities.length; i++){
      if(reviewPriorities[i].checked){
        answers.questionThree = reviewPriorities[i].value;
      }
    }

    answers.questionFour = reviewForm.querySelector('#reviewWebsiteColor').value;
    answers.questionFive = reviewForm.querySelector('#reviewDesc').value;
    answers.questionSix = reviewForm.querySelector('#reviewBudget').value;
    alert(answers);
    window.location = "thankyou.html";
  }
  // var reviewForm = document.querySelector('#review');

}

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
      choices.style.bottom = null;
      choices.style.right = null;
      // console.log(selectVal.value);
    }
	}

  function handleReviewColorClick(event){

  		event = event || window.event;
  		event.target = event.target || event.srcElement;
  		var element = event.target;

      if(element.className === 'color-thumb') {
        var result = element.getAttribute('data-value');
        var selectVal = document.querySelector('#reviewWebsiteColor');
        selectVal.value = result;
        answers.questionFour = selectVal.value;
        setReviewColorPlaceholderBackground();
        var choices = document.querySelector('#colorListing');
        choices.style.top = '-5000px';
        choices.style.left = 0;
        choices.style.bottom = null;
        choices.style.right = null;
        // console.log(selectVal.value);
      }
  	}

  document.addEventListener('submit', saveData, true);
  document.addEventListener('click', handleColorClick, true);
  document.addEventListener('click', handleReviewColorClick, true);
