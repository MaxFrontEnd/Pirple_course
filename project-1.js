displayStartPage();
let signUpform = document.createElement("form");
let loginForm = document.createElement("form");
let createListForm = document.createElement("form");
let createTaskForm = document.createElement("form");
let editForm = document.createElement("form");
let dashboard = document.createElement("div");
const ulOfTodos = document.createElement("ul");
const taskDiv = document.createElement("div");
const returnOnToDo = document.createElement("button");
const saveButton = document.createElement("button");
const header = document.querySelector(".header");

const createListButton = document.createElement("button");
//let helloUser = document.createElement("p");

signUpform.setAttribute("id", "signUpForm");
loginForm.setAttribute("id", "loginForm");
editForm.setAttribute("id", "edit-form");
dashboard.setAttribute("id", "dashboard");
dashboard.setAttribute("class", "dashboard");
createListButton.setAttribute("id", "createListButton");
createListButton.innerHTML = "Create new TODO List";
createListButton.setAttribute("class", "button");
ulOfTodos.setAttribute("id", "ulToDo");
taskDiv.setAttribute("id", "taskDiv");
returnOnToDo.setAttribute("id", "returnOnToDo");
returnOnToDo.setAttribute("class", "button");
returnOnToDo.innerHTML = "Return to list";
saveButton.setAttribute("class", "button");
saveButton.setAttribute("id", "saveButton");
saveButton.innerHTML = "Save";
//helloUser.setAttribute("class", "hello");

//START PAGE

function displayStartPage() {
  const body = document.getElementById("body");
  removeChilds(body);

  body.innerHTML =
    '<header>\
    <div id="headContainer" class="head-container">\
        <h1 class="header">TO DO LIST</h1>\
        <span id="userLogin" class="header-info">You are not logged in</span>\
        <span id="settings" class="header-info">Settings</span>\
        <span id="logOff" class="header-info">Log Off</span>\
    </div>\
</header>\
<div id="wrap">\
    <div id="content">\
    <h2 class="discription">Check what you do <span class="simbol">&#x2714</span></h2>\
    <button id="signUpButton" class="button" name="singUp">Sign Up</button>\
    <button id="LogInButton" class="button" name="Login">Log In</button>\
    </div>\
</div>';
  const content = document.getElementById("content");
  let loginButton = document.getElementById("LogInButton");
  let signUpButton = document.getElementById("signUpButton");
  loginButton.addEventListener("click", e => {
    content.classList.add("content-submit");
    //const wrap = document.getElementById("wrap");
    removeChilds(content);
    content.appendChild(loginForm);
    content.classList.add("content-submit");
    loginInputListener();
    //loginButton.removeEventListener("click");
  });

  signUpButton.addEventListener("click", () => {
    content.classList.add("content-submit");
    if (removeChilds(content)) {
      content.appendChild(signUpform);
      content.classList.add("content-submit");
      singUpInputListener();
    }
  });

  let logOff = document.getElementById("logOff");
  logOff.addEventListener("click", e => {
    e.preventDefault();
    logOffUser();
  });
}

console.log(content);

//EDIT FORM
editForm.innerHTML =
  '<label for="fname">First name:</label><br> \
<input type="text" id="fname" class="form-field" maxlength="30" name="fname" value=""><br> \
<label for="lname">Last name:</label><br> \
<input type="text" id="lname" class="form-field" name="lname" value=""><br> \
<label for="email">Email:</label><br> \
<input type="email" id="email" class="form-field" name="email" value=""><br> \
<label for="password">Password:</label><br> \
<input type="password" id="password" class="form-field" name="password" value=""><br><br>  \
<input type="submit" id="edit" class="button" value="Edit"> <br> \
<input type="submit" id="cancelEdit" class="button" value="Cancel">';
// SIGN UP FORM
signUpform.innerHTML =
  '<label for="fname">First name:</label><br> \
  <input type="text" id="fname" class="form-field" maxlength="30" name="fname" value=""><br> \
  <label for="lname">Last name:</label><br> \
  <input type="text" id="lname" class="form-field" name="lname" value=""><br> \
  <label for="email">Email:</label><br> \
  <input type="email" id="email" class="form-field" name="email" value=""><br> \
  <label for="password">Password:</label><br> \
  <input type="password" id="password" class="form-field" name="password" value=""><br><br>  \
  <input type="checkbox" id="checkbox" name="checkbox">I agree to the Terms of Use" <br><br> \
  <input type="submit" id="submit" class="button" value="Submit">';

//LOGIN FORM
loginForm.innerHTML =
  '<label for="email">Email:</label><br> \
  <input type="email" id="email" class="form-field" name="email" value=""><br> \
  <label for="password">Password:</label><br> \
  <input type="password" id="password" class="form-field" name="password" value=""><br><br>  \
  <input type="submit" id="login" class="button" value="Log In">';

// CREATE NEW LIST
createListForm.innerHTML =
  '<label for="ListName">List Name:</label><br> \
  <input type="text" id="newList" class="form-field"  maxlength="30" name="ListName" value=""><br> \
  <input type="submit" id="apply" class="list-button" value="Create"> \
  <input type="submit" id="cancel" class="list-button" value="Cancel">';

//CREATE TASK FORM

createTaskForm.innerHTML =
  '<label for="TaskName">Task name:</label><br> \
    <input type="text" id="newTask" class="form-field" maxlength="30" name="TaskName" value=""><br> \
    <input type="submit" id="addTask" class="list-button" value="Add"> ';

// DASHBOARD
function displayDashboard(userObj) {
  if (removeChilds(content)) {
    content.classList.remove("content-submit");
    content.appendChild(dashboard);
  }
  dashboard.appendChild(createListButton);
  addCreateToDoListForm(userObj);
  displayListOfToDos(userObj);
}

// ADD NEW TO DO TO THE OBJECT
function addToDo(userObj, toDoName) {
  //console.log(userObj.toDo);
  //console.log("here");
  if (
    Object.keys(userObj.toDo).length !== 0 &&
    userObj.toDo.constructor === Object
  ) {
    for (let key in userObj.toDo) {
      if (key === toDoName) {
        console.log("ToDo name Already exixst");
      } else {
        userObj.toDo[toDoName] = {};
        localStorage.removeItem(userObj.firstName);
        localStorage.setItem(userObj.firstName, JSON.stringify(userObj));
        return true;
      }
      return false;
    }
  } else {
    userObj.toDo[toDoName] = {};
    localStorage.removeItem(userObj.firstName);
    localStorage.setItem(userObj.firstName, JSON.stringify(userObj));
    return true;
  }
}

// DISPLAY TODOS FUNCTIONALITY
function displayListOfToDos(userObj) {
  while (ulOfTodos.firstChild) {
    console.log("removed");
    ulOfTodos.removeChild(ulOfTodos.firstChild);
  }
  //console.log(userObj);
  for (let key in userObj.toDo) {
    let li = document.createElement("li");
    li.setAttribute("class", "toDoLi");
    li.innerHTML = "<a href='' id=" + key + ">" + key + "</a>";
    ulOfTodos.appendChild(li);
  }

  //Bubling

  ulOfTodos.addEventListener("click", e => {
    e.preventDefault();
    for (let key in userObj.toDo) {
      if (key === e.target.outerText) {
        displayAddTaskForm(userObj, userObj.toDo[key], key);
        displayListOfTasks(userObj.toDo[key], userObj, key);
      }
    }
  });

  content.appendChild(ulOfTodos);
}

// DISPLAY ADD TASK FORM
function displayAddTaskForm(userObj, toDoObj, key) {
  content.appendChild(createTaskForm);
  let addTaskButton = document.getElementById("addTask");
  let taskName = document.getElementById("newTask");
  addTaskButton.addEventListener("click", e => {
    e.preventDefault();
    if (!taskName.value) {
      console.log("eter a taskName");
    } else {
      addTask(userObj, toDoObj, taskName.value, key);
    }
  });
}

// DISPLAY TASKS
function displayListOfTasks(toDoObj, userObj, key) {
  removeChilds(taskDiv);
  for (let task in toDoObj) {
    let liDiv = document.createElement("div");
    liDiv.setAttribute("class", "liDiv");
    let taskSpan = document.createElement("span");
    taskSpan.setAttribute("class", "taskLi");

    let cheked = document.createElement("span");
    cheked.classList.add("done", "cheked");
    if (toDoObj[task] === false) {
      cheked.innerHTML = "X";
      cheked.classList.add("done");
    } else {
      cheked.innerHTML = "V";
      cheked.classList.remove("done");
    }

    //BuBLING
    taskSpan.innerHTML = task;
    liDiv.appendChild(taskSpan);
    liDiv.appendChild(cheked);
    taskDiv.appendChild(liDiv);
    liDiv.addEventListener("click", e => {
      e.preventDefault();
      //   console.log(e.target.firstChild.innerText);
      //   console.log(e.target.innerText);
      //   console.log(task);
      if (
        e.target.innerText === task &&
        e.target.nextSibling.innerText === "X"
      ) {
        userObj.toDo[key][task] = true;
        cheked.innerHTML = "V";
        cheked.classList.toggle("done");
      } else if (
        e.target.firstChild.innerText === task &&
        e.target.firstChild.nextSibling.innerText === "X"
      ) {
        userObj.toDo[key][task] = true;
        cheked.innerHTML = "V";
        cheked.classList.toggle("done");
      } else if (
        e.target.innerText === task &&
        e.target.nextSibling.innerText === "V"
      ) {
        userObj.toDo[key][task] = false;
        cheked.innerHTML = "X";
        cheked.classList.toggle("done");
      } else if (
        e.target.firstChild.innerText === task &&
        e.target.firstChild.nextSibling.innerText === "V"
      ) {
        userObj.toDo[key][task] = false;
        cheked.innerHTML = "X";
        cheked.classList.toggle("done");
      }
    });
  }

  if (removeChilds(content)) {
    content.classList.remove("content-submit");
    content.appendChild(createTaskForm);
    content.appendChild(taskDiv);
    content.appendChild(returnOnToDo);
    content.appendChild(saveButton);
  }
  const saveButtonPress = document.getElementById("saveButton");
  console.log(saveButtonPress);
  saveButtonPress.addEventListener("click", e => {
    e.preventDefault();
    console.log(userObj);
    saveObject(userObj);
  });
  const returnButtonPress = document.getElementById("returnOnToDo");
  returnButtonPress.addEventListener("click", e => {
    e.preventDefault();
    displayDashboard(userObj);
  });

  //   content.removeChild(ulOfTodos);
  //   content.appendChild(ulOfTasks);

  //   while (ulOfTasks.firstChild) {
  //     ulOfTasks.removeChild(ulOfTasks.firstChild);
  //   }

  //   for (let key in userObj.toDo) {
  //     let li = document.createElement("li");
  //     li.innerHTML = "<a href='' id=" + key + ">" + key + "</a>";
  //     ulOfTodos.appendChild(li);
  //   }
}

// SAVE OBJECT
function saveObject(userObj) {
  if (userObj) {
    localStorage.removeItem(userObj.firstName);
    localStorage.setItem(userObj.firstName, JSON.stringify(userObj));
    displayDashboard(userObj);
  }
}

// ADD NEW TASK TO THE OBJECT
function addTask(userObj, toDoObj, taskName, key) {
  console.log(toDoObj);
  if (Object.keys(toDoObj).length === 0 && toDoObj.constructor === Object) {
    console.log("EMPTY OBJECt");
    userObj.toDo[key][taskName] = false;
    localStorage.removeItem(userObj.firstName);
    localStorage.setItem(userObj.firstName, JSON.stringify(userObj));
    displayListOfTasks(toDoObj, userObj, key);
    return;
  }
  for (let task in toDoObj) {
    console.log(task);
    if (task === taskName) {
      console.log("task " + task + " already exist. Yot enter " + taskName);
      return false;
    }
  }
  userObj.toDo[key][taskName] = false;
  localStorage.removeItem(userObj.firstName);
  localStorage.setItem(userObj.firstName, JSON.stringify(userObj));
  console.log(key);
  displayListOfTasks(toDoObj, userObj, key);
  return true;
}

// ADD CREATE LIST FORM ON PAGE
function addCreateToDoListForm(userObj) {
  createListButton.addEventListener("click", e => {
    e.preventDefault();
    dashboard.appendChild(createListForm);
    const applyCreationList = document.getElementById("apply");
    const cancelCreationList = document.getElementById("cancel");
    const listName = document.getElementById("newList");
    // APLAY BUTTON
    applyCreationList.addEventListener("click", e => {
      e.preventDefault();
      addToDo(userObj, listName.value);
      displayListOfToDos(userObj);
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
      toDo: {}
    };
    localStorage.setItem(firstName, JSON.stringify(userData));
    return JSON.parse(localStorage.getItem(firstName, userData));
  } else {
    return false;
  }
}

// DISPLAY SIGUP FORM

//CHECK INPUTS VALUES
function signUp(e) {
  e.preventDefault();
  const fnInput = document.getElementById("fname");
  const lnInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
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
      displayDashboard(userIsInserted);
      displayData(userIsInserted);
      // IF DATA NOT INSERTED USER ALREADY EXIXST
    } else {
      validationEmpty.innerHTML = "User already exists";
      signUpform.appendChild(validationEmpty);
      setTimeout(() => {
        signUpform.removeChild(validationEmpty);
      }, 3000);
    }
  }
}
function singUpInputListener() {
  const fnInput = document.getElementById("fname");
  const lnInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitInput = document.getElementById("submit");

  fnInput.value = "";
  lnInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
  submitInput.addEventListener("click", signUp);
}

// LOG IN BUTTON

function displayData(userObj) {
  let loginInfo = document.getElementById("userLogin");
  loginInfo.innerText = userObj.firstName;
}

function logOffUser() {
  let loginInfo = document.getElementById("userLogin");
  loginInfo.innerText = "You are not logged in";
  //const wrap = document.getElementById("wrap");
  //removeChilds(content);
  displayStartPage();
}

function logIn(e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
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
      displayData(emailExists);
      displayDashboard(emailExists);
      let settings = document.getElementById("settings");
      settings.addEventListener("click", e => {
        e.preventDefault();
        editUser(emailExists);
      });
    } else {
      loginForm.appendChild(validationMessage);
      setTimeout(() => {
        loginForm.removeChild(validationMessage);
      }, 3000);
    }
  }
}

// Listen login button
function loginInputListener() {
  const loginInput = document.getElementById("login");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  emailInput.value = "";
  passwordInput.value = "";
  loginInput.addEventListener("click", logIn);
}

function editUser(userObj) {
  if (!userObj) {
    alert("You are not login in");
  } else {
    removeChilds(content);
    console.log(editForm);
    content.appendChild(editForm);
    const fnInput = document.getElementById("fname");
    const lnInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const editButton = document.getElementById("edit");
    const cancelButton = document.getElementById("cancelEdit");
    fnInput.value = userObj.firstName;
    lnInput.value = userObj.lastName;
    emailInput.value = userObj.email;
    passwordInput.value = userObj.password;

    cancelEdit.addEventListener("click", e => {
      e.preventDefault();
      displayDashboard(userObj);
    });
    editButton.addEventListener("click", e => {});
  }
}

// function editListener(e) {
//     const editButton = document.getElementById("edit");
//     editButton.addEventListener('click', e => {

//     })
// }
