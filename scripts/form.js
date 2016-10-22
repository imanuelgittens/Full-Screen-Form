



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
  console.log(item.nextElementSibling);
}
