const firebaseConfig = {
  apiKey: "AIzaSyBG5j-TH7wK1fBj04wQwWr2qZsN6M095U8",
  authDomain: "html1-48656.firebaseapp.com",
  databaseURL: "https://html1-48656-default-rtdb.firebaseio.com",
  projectId: "html1-48656",
  storageBucket: "html1-48656.appspot.com",
  messagingSenderId: "637239205056",
  appId: "1:637239205056:web:99654fb135baa7da232125",
  measurementId: "G-WK0YBD7YH9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var html1DB = firebase.database().ref("html1");

document.getElementById("html1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("html1").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newhtml1 = html1DB.push();

  newhtml1.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
