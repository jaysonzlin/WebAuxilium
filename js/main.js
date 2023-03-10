// Initialize Firebase
var config = {
    apiKey: "AIzaSyAqFdBDAJZMamFZTDYqcDePWJ7aEybS-7U",
    authDomain: "web-auxilium.firebaseapp.com",
    projectId: "web-auxilium",
    storageBucket: "web-auxilium.appspot.com",
    messagingSenderId: "654664555364",
    appId: "1:654664555364:web:de656d9fd03cb0387f3871",
    measurementId: "G-9C9CLEPHXR"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}