// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC-70qAQa3T_ktyiC8q0tuKZKNAXwExJHA",
    authDomain: "totally-reliable-service.firebaseapp.com",
    databaseURL: "https://totally-reliable-service-default-rtdb.firebaseio.com",
    projectId: "totally-reliable-service",
    storageBucket: "totally-reliable-service.appspot.com",
    messagingSenderId: "994264255062",
    appId: "1:994264255062:web:2308479d13cc377f0409f7"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('enquiries');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var date = getInputVal('date');
    var info = getInputVal('info');
    var budget = getInputVal('budget');
    
    // Save message
    saveMessage(name, email, phone, date, info, budget);
  
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
  function saveMessage(name, email, phone, date, info, budget){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      email:email,
      phone:phone,
      date:date,
      info:info,
      budget:budget
    });
  }