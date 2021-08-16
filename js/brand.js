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
var messagesRef = firebase.database().ref('brand');

//Listen for form submit
document.getElementById('signUpForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

//get values
var company_name = getInputVal('company_name');
var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var genre = getInputVal('genre');

//save message
saveMessage(company_name, name, email, phone, genre);

//show alert
document.querySelector('.alert').style.display = 'block';

}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(company_name, name, email, phone, genre){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        company_name: company_name,
        name: name,
        email: email,
        phone: phone,
        genre: genre
    })
}