//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCROkMtdm1FKsD0wymlHCnccaSOmfpNRT4",
    authDomain: "egsey-12886.firebaseapp.com",
    databaseURL: "https://egsey-12886-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "egsey-12886",
    storageBucket: "egsey-12886.appspot.com",
    messagingSenderId: "644467168894",
    appId: "1:644467168894:web:e0b1744b83e27cb17b6a2f",
    measurementId: "G-MC6L92REQE"
};
firebase.initializeApp(firebaseConfig);

//reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('signUpForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

//get values
var name = getInputVal('name');
var accountID = getInputVal('accountID');
var email = getInputVal('email');

//save message
saveMessage(name, accountID, email);

//show alert
document.querySelector('.alert').style.display = 'block';

}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, accountID, email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        accountID: accountID,
        email: email
    })
}