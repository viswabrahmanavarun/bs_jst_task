window.onload = init;
function init() {
   
   document.getElementById("formTest").onsubmit = validateForm;
   document.getElementById("btnReset").onclick = clearForm;
   document.getElementById("txtName").focus();
}
 

 
function validateForm(theForm) {
   with(theForm) {
      
      return (isNotEmpty(txtName, "Please enter your name!", elmNameError)
           && isNumeric(txtZipcode, "Please enter a 5-digit zip code!", elmZipcodeError)
           && isLengthMinMax(txtZipcode, 5, 5, "Please enter a 5-digit zip code!", elmZipcodeError)
           && isSelected(selCountry, "Please make a selection!", elmCountryError)
           && isChecked("gender", "Please check a gender!", elmGenderError)
           && isChecked("color", "Please check a color!", elmColorError)
           && isNumeric(txtPhone, "Please enter a valid phone number!", elmPhoneError)
           && isValidEmail(txtEmail, "Enter a valid email!", elmEmailError)
           && isValidPassword(txtPassword, "Password shall be 6-8 characters!", elmPasswordError)
           && verifyPassword(txtPassword, txtPWVerified, "Different from new password!",
                 elmPWVerifiedError)
      );
   }
}
function postValidate(isValid, errMsg, errElm, inputElm) {
   if (!isValid) {
      if (errElm !== undefined && errElm !== null
            && errMsg !== undefined && errMsg !== null) {
         errElm.innerHTML = errMsg;
      }
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.add("errorBox");  
         inputElm.focus();
      }
   } else {
     
      if (errElm !== undefined && errElm !== null) {
         errElm.innerHTML = "";
      }
      if (inputElm !== undefined && inputElm !== null) {
         inputElm.classList.remove("errorBox");
      }
   }
}
 

function isNotEmpty(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim() !== "");
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function isNumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\d+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function isAlphabetic(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[a-zA-Z]+$/) !== null) ;
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function isAlphanumeric(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^[0-9a-zA-Z]+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function isLengthMinMax(inputElm, minLength, maxLength, errMsg, errElm) {
   var inputValue = inputElm.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function isValidEmail(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
function isSelected(selectElm, errMsg, errElm) {
   
   var isValid = (selectElm.value !== "");  
   postValidate(isValid, errMsg, errElm, selectElm);
   return isValid;
}

function isChecked(inputName, errMsg, errElm) {
   var elms = document.getElementsByName(inputName);
   var isChecked = false;
   for (var i = 0; i < elms.length; ++i) {
      if (elms[i].checked) {
         isChecked = true;
         break;
      }
   }
   postValidate(isChecked, errMsg, errElm, null);  
   return isChecked;
}

function isValidPassword(inputElm, errMsg, errElm) {
   var isValid = (inputElm.value.trim().match(/^\w{6,8}$/) !== null);
   postValidate(isValid, errMsg, errElm, inputElm);
   return isValid;
}
 

function verifyPassword(pwElm, pwVerifiedElm, errMsg, errElm) {
   var isTheSame = (pwElm.value === pwVerifiedElm.value);
   postValidate(isTheSame, errMsg, errElm, pwVerifiedElm);
   return isTheSame;
}
function clearForm() {
   var elms = document.querySelectorAll('.errorBox');  
   for (var i = 0; i < elms.length; i++) {
      elms[i].classList.remove("errorBox");
   }
 
   elms = document.querySelectorAll('[id$="Error"]');  
   for (var i = 0; i < elms.length; i++) {
      elms[i].innerHTML = "";
   }
   document.getElementById("txtName").focus();
}