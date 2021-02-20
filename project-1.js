let signUpform = document.createElement("form");
let loginForm = document.createElement("form");
let createListForm = document.createElement("form");
let dashboard = document.createElement("div");
let pageContent = document.getElementById("content");
const signUpButton = document.getElementById("signUpButton");
const loginButton = document.getElementById("LogInButton");

const createListButton = document.createElement("button");
//let helloUser = document.createElement("p");

signUpform.setAttribute("id", "signUpForm");
loginForm.setAttribute("id", "loginForm");
dashboard.setAttribute("id", "dashboard");
dashboard.setAttribute("class", "dashboard");
createListButton.setAttribute("id", "createListButton");
createListButton.innerHTML = "Create new TODO List";
createListButton.setAttribute("class", "button");
//helloUser.setAttribute("class", "hello");

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

// CREATE NEW LIST
createListForm.innerHTML =
  '<label for="ListName">Name new list</label><br> \
  <input type="text" id="newList" class="form-field" name="ListName" value=""><br> \
  <input type="submit" id="apply" class="list-button" value="Create"> \
  <input type="submit" id="cancel" class="list-button" value="Cancel">';

// DASHBOARD
function displayDashboard() {
  dashboard.appendChild(createListButton);
  if (removeChilds(pageContent)) {
    pageContent.classList.remove("content-submit");
    dashboard.appendChild(createListButton);
    pageContent.appendChild(dashboard);
  }
  createListButton.addEventListener("click", e => {
    e.preventDefault();
    dashboard.appendChild(createListForm);
    const applyCreationList = document.getElementById("apply");
    const cancelCreationList = document.getElementById("cancel");
    // APLAY BUTTON
    applyCreationList.addEventListener("click", e => {
      e.preventDefault();
    });
    // CANCEL BUTTON
    cancelCreationList.addEventListener("click", e => {
      e.preventDefault();
      if (createListForm.parentNode) {
        dashboard.removeChild(createListForm);
      }
    });
  });
}

// REMOVES ALL CHILDS FROM PARENT DIV
function removeChilds(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return true;
}

// CHECK IF data EXISTS IN STORAGE
function CheckIfDataExistsInLS(Data, typeOfData) {
  for (let i = 0; i < localStorage.length; i++) {
    let objkey = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (typeOfData === "userName" && objkey.firstName === Data) return objkey;
    if (typeOfData === "userEmail" && objkey.email === Data) return objkey;
  }
  return false;
}

//FUNCTION TO SET ITEMS TO LOCAL STORAGE
function insertUserDataToLocalStorage(firstName, lastName, email, password) {
  let userExists = CheckIfDataExistsInLS(firstName, "userName");
  console.log(userExists);
  if (!userExists) {
    //let toDo = [];
    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      toDo: []
    };
    localStorage.setItem(firstName, JSON.stringify(userData));
    return true;
  } else {
    console.log("here");
    return false;
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
      let userIsInserted = insertUserDataToLocalStorage(
        fnInput.value,
        lnInput.value,
        emailInput.value,
        passwordInput.value
      );
      // IF DATA IS INSERTED
      if (userIsInserted) {
        displayDashboard();
        createListButton.addEventListener("click", e => {
          e.preventDefault();
        });
        // IF DATA NOT INSERTED USER ALREADY EXIXST
      } else {
        validationEmpty.innerHTML = "User already exists";
        signUpform.appendChild(validationEmpty);
        setTimeout(() => {
          signUpform.removeChild(validationEmpty);
        }, 3000);
      }
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
  const loginInput = document.getElementById("login");
  //const signUpform = document.getElementById("signUpForm");
  //CHECK INPUTS VALUES
  loginInput.addEventListener("click", e => {
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
      let emailExists = CheckIfDataExistsInLS(emailInput.value, "userEmail");
      if (emailExists && passwordInput.value === emailExists.password) {
        displayDashboard();
      } else {
        loginForm.appendChild(validationMessage);
        setTimeout(() => {
          loginForm.removeChild(validationMessage);
        }, 3000);
      }
    }
  });
});