// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB79GaMXzP-iIFBO5W38Rl057GHpk38hGE",
    authDomain: "felixmmt-d7568.firebaseapp.com",
    databaseURL: "https://felixmmt-d7568-default-rtdb.firebaseio.com",
    projectId: "felixmmt-d7568",
    storageBucket: "felixmmt-d7568.appspot.com",
    messagingSenderId: "131753674604",
    appId: "1:131753674604:web:19f6132a34f8e2f4541549"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('applications');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    
    // Save message
    saveMessage(name, email);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      email:email,
    });
  }