var currentTab = 0;
showTab(currentTab);

function showTab(n) {

  var tab = $(".tab");
  var tabForm = $(".tabForm");

  for(let i = 0; i< tabForm.length; i++) {

    if(i === n) {
      tab[i].style.display = "block";
      tabForm[i].style.display = "block";
    }
    else if(i != n) {

      tab[i].style.display = "none";
      tabForm[i].style.display = "none";
    }      
  }

  fixStepIndicator(n)
}

function fixStepIndicator(n) {

  if($(".indicator-item").is(".selected")) {
    $(".indicator-item").removeClass("selected")
  }

  var stepItem = $(".indicator").children();

  for (let i = 0; i < n + 1; i++) {
    stepItem[i].classList.add('selected');    
  }
}

function nextPrev(n) {
  // var tab = $(".tab");
  // var tabForm = $(".tabForm");

  currentTab = currentTab + n;

  // if (currentTab >= tabForm.length) {
  //   // ... the form gets submitted:
  //   $("regForm").submit();
  //   return false;
  // }

  showTab(currentTab);
}