let signUpform = document.createElement("form");
let loginForm = document.createElement("form");
let pageContent = document.getElementById("content");
const signUpButton = document.getElementById("signUpButton");
const loginButton = document.getElementById("LogInButton");
signUpform.setAttribute("id", "signUpForm");
loginForm.setAttribute("id", "loginForm");

// SIGN UP FORM
signUpform.innerHTML =
  '<label for="fname">First name:</label><br> \
  <input type="text" id="fname" class="form-field" name="fname" value=""><br> \
  <label for="lname">Last name:</label><br> \
  <input type="text" id="lname" class="form-field" name="lname" value=""><br> \
  <label for="email">Email:</label><br> \
  <input type="email" id="email" class="form-field" name="email" value=""><br> \
  <label for="password">Password:</label><br> \
  <input type="password" id="password" class="form-field" name="password" value=""><br><br>  \
  <input type="checkbox" id="checkbox" name="checkbox">I agree to the Terms of Use" <br><br> \
  <input type="submit" id="submit" value="Submit">';

//LOGIN FORM
loginForm.innerHTML =
  '<label for="email">Email:</label><br> \
  <input type="email" id="email" class="form-field" name="email" value=""><br> \
  <label for="password">Password:</label><br> \
  <input type="password" id="password" class="form-field" name="password" value=""><br><br>  \
  <input type="submit" id="login" value="Login">';

// REMOVES ALL CHILDS FROM PARENT DIV
function removeChilds(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return true;
}

// CHECK IF NAME EXISTS IN STORAGE
function checkName(name) {
  for (let i = 0; i < localStorage.length; i++) {
    let objkey = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(objkey.firstName);
    if (objkey.firstName === name) return false;
  }
  return true;
}

//let obj = JSON.parse(localStorage.getItem("User"));

//checkName(obj);
//FUNCTION TO SET ITEMS TO LOCAL STORAGE
function insertUserDataToLocalStorage(firstName, lastName, email, password) {
  if (checkName(firstName)) {
    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    localStorage.setItem(firstName, JSON.stringify(userData));
  } else {
    alert("name already exists");
  }
}

// DISPLAY SIGUP FORM
signUpButton.addEventListener("click", () => {
  pageContent.classList.add("content-submit");
  if (removeChilds(pageContent)) {
    pageContent.appendChild(signUpform);
    pageContent.classList.add("content-submit");
  }
  const fnInput = document.getElementById("fname");
  const lnInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitInput = document.getElementById("submit");
  //const signUpform = document.getElementById("signUpForm");
  //CHECK INPUTS VALUES
  submitInput.addEventListener("click", e => {
    e.preventDefault();
    const validationEmpty = document.createElement("p");
    validationEmpty.innerHTML = "All fields are required";
    validationEmpty.style.cssText = "color: red";
    if (
      !fnInput.value ||
      !lnInput.value ||
      !emailInput.value ||
      !passwordInput.value ||
      !checkbox.checked
    ) {
      signUpform.appendChild(validationEmpty);
      setTimeout(() => {
        signUpform.removeChild(validationEmpty);
      }, 3000);
    } else {
      // INSERT-DATA TO LOCALSTORAGE AND DISPLAY DASHBOARD
      insertUserDataToLocalStorage(
        fnInput.value,
        lnInput.value,
        emailInput.value,
        passwordInput.value
      );
    }
  });
});

// LOG IN BUTTON

loginButton.addEventListener("click", () => {
  pageContent.classList.add("content-submit");
  if (removeChilds(pageContent)) {
    pageContent.appendChild(loginForm);
    pageContent.classList.add("content-submit");
  }
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitInput = document.getElementById("login");
  //const signUpform = document.getElementById("signUpForm");
  //CHECK INPUTS VALUES
  submitInput.addEventListener("click", e => {
    e.preventDefault();
    const validationMessage = document.createElement("p");
    validationMessage.innerHTML = "Login or Password are incorect";
    validationMessage.style.cssText = "color: red";
    if (!emailInput.value || !passwordInput.value) {
      loginForm.appendChild(validationMessage);
      setTimeout(() => {
        loginForm.removeChild(validationMessage);
      }, 3000);
    } else {
      // DISPLAY USER DASHBOARD DASHBOARD

      console.log(localStorage.getItem("firstName"));
    }
  });
});
