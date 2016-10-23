
// variables
var colorButton = document.querySelector('#colorChoices');
var reviewColorButton = document.querySelector('#reviewColorChoices');
var finishButton = document.querySelector('#finish');

var navOne = document.querySelector('.progress-thumbs .first label');
var navTwo = document.querySelector('.progress-thumbs .second label');
var navThree = document.querySelector('.progress-thumbs .third label');
var navFour = document.querySelector('.progress-thumbs .fourth label');
var navFive = document.querySelector('.progress-thumbs .fifth label');
var navSix = document.querySelector('.progress-thumbs .sixth label');

var answers = {};

// First Page load functions

function pageNumber(number){
  var current = document.querySelector('.current');
  current.innerHTML = number;
}

pageNumber(1);

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

// Validator functions

function validateName(){
  var name = document.querySelector('#fullName');
  if(name.value){
    return true;
  }else{
    return false;
  }
}

function validateEmail(){
  var email = document.querySelector('#email');

  var result = false;
  if(email.value){
    var isValid = isEmailAddress(email.value);
    if(isValid){
      result = true;
    }
  }

  return result;
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

function isEmailAddress(input){

		if(!input){
			throw "Missing Parameter in isEmailAddress function: 'input'.";
		}

		if(input.indexOf("@") < 1){
			return false;
		}

		var emailParts = input.split('@');
		var domain = emailParts[1];


		if(emailParts.length > 2){
			return false;
		}

		if(domain.indexOf('.') == -1){
			return false;
		}else{
			var domainParts = domain.split('.');
			var extension = domainParts[1];
			if(extension.length < 2){
				return false;
			}
		}

		return true;
	}

// sticky right side navigation functions

function updateSideNavigation(){
  var first = document.querySelector('.progress-thumbs .first label');
  var second = document.querySelector('.progress-thumbs .second label');
  var third = document.querySelector('.progress-thumbs .third label');
  var fourth = document.querySelector('.progress-thumbs .fourth label');
  var fifth = document.querySelector('.progress-thumbs .fifth label');
  var sixth = document.querySelector('.progress-thumbs .sixth label');

  if(answers.questionOne){
    first.style.color = '#222';
    first.style.cursor = 'pointer';
  }
  if(answers.questionTwo){
    second.style.color = '#222';
    second.style.cursor = 'pointer';
  }
  if(answers.questionThree){
    third.style.color = '#222';
    third.style.cursor = 'pointer';
  }
  if(answers.questionFour){
    fourth.style.color = '#222';
    fourth.style.cursor = 'pointer';
  }
  if(answers.questionFive){
    fifth.style.color = '#222';
    fifth.style.cursor = 'pointer';
  }
  if(answers.questionSix){
    sixth.style.color = '#222';
    sixth.style.cursor = 'pointer';
  }
}

navOne.addEventListener('click', function(){
  if(answers.questionOne){

          var currentActive = document.querySelector('li.active');
          var questionOne = document.querySelector('.question-one');
          currentActive.classList.remove('active');
          questionOne.classList.add('active');
        }
});

navTwo.addEventListener('click', function(){
  if(answers.questionTwo){

          var currentActive = document.querySelector('li.active');
          var questionTwo = document.querySelector('.question-two');
          currentActive.classList.remove('active');
          questionTwo.classList.add('active');
        }
});

navThree.addEventListener('click', function(){
  if(answers.questionThree){

          var currentActive = document.querySelector('li.active');
          var questionThree = document.querySelector('.question-three');
          currentActive.classList.remove('active');
          questionThree.classList.add('active');
        }
});

navFour.addEventListener('click', function(){
  if(answers.questionFour){

          var currentActive = document.querySelector('li.active');
          var questionFour = document.querySelector('.question-four');
          currentActive.classList.remove('active');
          questionFour.classList.add('active');
        }
});

navFive.addEventListener('click', function(){
  if(answers.questionFive){

          var currentActive = document.querySelector('li.active');
          var questionFive = document.querySelector('.question-five');
          currentActive.classList.remove('active');
          questionFive.classList.add('active');
        }
});

navSix.addEventListener('click', function(){
  if(answers.questionSix){

          var currentActive = document.querySelector('li.active');
          var questionSix = document.querySelector('.question-six');
          currentActive.classList.remove('active');
          questionSix.classList.add('active');
        }
});


// Main form interaction functions

function formNavigation() {
  //find current active element
  var item = document.querySelector('form#websiteForm li.active');

  // Determine which question we are on be checking the child inputs

  if (item.querySelector('#fullName') !== null) {
    if(validateName()){
      answers.questionOne = item.querySelector('#fullName').value;
      item.classList.remove('active');
      updateSideNavigation();
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
           pageNumber(2);
         }else{
          //  When we have no more questions we show the review page.
           var formReview = document.querySelector('#review');
           reviewValues();
           formReview.style.top = 0;
        }
    }else{
      item.querySelector('#fullName').classList.add('required');
    }
  }

  if (item.querySelector('#email') !== null) {
    if(validateEmail()){
      answers.questionTwo = item.querySelector('#email').value;
      item.classList.remove('active');
      updateSideNavigation();
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
           pageNumber(3);
         }else{
          //  When we have no more questions we show the review page.
           reviewValues();
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;

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
    updateSideNavigation();
    // Check if another list element (question) exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
      pageNumber(4);
    }else{
     //  When we have no more questions we show the review page.
      reviewValues();
      var formReview = document.querySelector('#review');
      formReview.style.top = 0;

    }

  }

  if (item.querySelector('#websiteColor') !== null) {
    answers.questionFour = item.querySelector('#websiteColor').value;
    item.classList.remove('active');
    updateSideNavigation();
    // Check if another list element (question) exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
      pageNumber(5);
    }else{
     //  When we have no more questions we show the review page.
      reviewValues();
      var formReview = document.querySelector('#review');
      formReview.style.top = 0;

    }

  }

  if (item.querySelector('#websiteDesc') !== null) {
    if(validateDesc()){
      answers.questionFive = item.querySelector('#websiteDesc').value;
      item.classList.remove('active');
      updateSideNavigation();
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
           pageNumber(6);
         }else{
          //  When we have no more questions we show the review page.
           reviewValues();
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;
        }
    }else{
      item.querySelector('#websiteDesc').classList.add('required');
    }
  }

  if (item.querySelector('#budget') !== null) {
    if(validateBudget()){
      answers.questionSix = item.querySelector('#budget').value;
      item.classList.remove('active');
      updateSideNavigation();
         // Check if another list element (question) exists
         if (item.nextElementSibling){
           item.nextElementSibling.classList.add('active');
           pageNumber(7);
         }else{
          //  When we have no more questions we show the review page.
           reviewValues();
           var formReview = document.querySelector('#review');
           formReview.style.top = 0;

        }
    }else{
      item.querySelector('#budget').classList.add('required');
    }
  }



} //end form naviagtion

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

    }
	}

  document.addEventListener('click', handleColorClick, true);


colorButton.addEventListener('click', function showColors(){
  var choices = document.querySelector('#colorListing');
  choices.style.top = 0;
  choices.style.left = 0;
  choices.style.right = 0;
  choices.style.bottom = 0;
});

// Review page functions
function reviewValues(){
  setReviewColorPlaceholderBackground();
  var formReview = document.querySelector('#review');
  formReview.querySelector('#reviewName').value = answers.questionOne;
  formReview.querySelector('#reviewEmail').value = answers.questionTwo;
  var websitePriorities = formReview.getElementsByClassName('reviewPriorities');
  for(var i = 0; i < websitePriorities.length; i++){
    if (websitePriorities[i].value === answers.questionThree){
      websitePriorities[i].setAttribute('checked', 'checked');
    }

  }
  formReview.querySelector('#reviewColorChoices').value = answers.questionFour;
  formReview.querySelector('#reviewDesc').value = answers.questionFive;
  formReview.querySelector('#reviewBudget').value = answers.questionSix;
}

function setReviewColorPlaceholderBackground(){
  var placeholder = document.querySelector('#reviewColorChoices .color');
  var colorLabel = document.querySelector('#reviewColorChoices .color-code span');
  placeholder.style.background = answers.questionFour;
  colorLabel.innerHTML = answers.questionFour;
}

function saveData(event){
  event.preventDefault();
  event = event || window.event;
  event.target = event.target || event.srcElement;
  var element = event.target;

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

    window.location = "thankyou.html";
  }


}

document.addEventListener('submit', saveData, true);

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

    }
  }

  document.addEventListener('click', handleReviewColorClick, true);

  reviewColorButton.addEventListener('click', function showReviewColors(){

    var choices = document.querySelector('#colorListing');
    choices.style.top = 0;
    choices.style.left = 0;
    choices.style.right = 0;
    choices.style.bottom = 0;
    choices.style.zIndex = 3000;
  });
