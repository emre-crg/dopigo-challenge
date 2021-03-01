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
  


  //... and fix the Previous/Next buttons:
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  // } else {
  //   document.getElementById("prevBtn").style.display = "inline";
  // }
  // if (n == (x.length - 1)) {
  //   document.getElementById("nextBtn").innerHTML = "Submit";
  // } else {
  //   document.getElementById("nextBtn").innerHTML = "Next";
  // }
  //... and run a function that will display the correct step indicator:
  // fixStepIndicator(n)
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = $(".step");
  // for (i = 0; i < x.length; i++) {
  //   x[i].className = x[i].className.replace(" active", "");
  // }
  // //... and adds the "active" class on the current step:
  // x[n].className += " active";
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