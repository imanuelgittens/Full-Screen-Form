
var colorButton = document.querySelector('#colorChoices');

// console.log(colorButton);


function addActiveClass() {
  //find current active element
  var item = document.querySelector('form#websiteForm li.active');
  if (item) {
    item.classList.remove('active');
    //check if another list element exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
    }else{
      var formReview = document.querySelector('#review');
      formReview.style.top = 0;
      console.log('Done');
    }

  }


  // item.className += ' active';
  // console.log(item.nextElementSibling);
}

function setBackgroundOptions(){
  var colorsList = document.getElementsByClassName('color-thumb');
  for(var i = 0; i < colorsList.length; i++){
    var bg = colorsList[i].getAttribute('data-value');
    colorsList[i].style.background = bg;
  }
}

setBackgroundOptions();

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
      var choices = document.querySelector('#colorListing');
      choices.style.top = '-5000px';
      choices.style.left = 0;
      console.log(selectVal.value);
    }

		// var productNumber, value;
    //
		// if(element.className === 'apply-coupon'){
		// 	value = document.getElementById('coupon').value;
    //
		// 	if(value){
		// 		promoCode(value);
		// 	}else{
		// 		alert("Enter a coupon code.");
		// 	}
		// }
	}

  document.addEventListener('click', handleColorClick, true);
