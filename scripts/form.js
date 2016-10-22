
var colorButton = document.querySelector('#colorChoices');
console.log(colorButton);


function addActiveClass() {
  //find current active element
  var item = document.querySelector('form#websiteForm li.active');
  if (item) {
    item.classList.remove('active');
    //check if another list element exists
    if (item.nextElementSibling){
      item.nextElementSibling.classList.add('active');
    }else{
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
  console.log('Inside function');
  var choices = document.querySelector('#colorListing');
  choices.style.top = 0;
  choices.style.left = 0;
});
