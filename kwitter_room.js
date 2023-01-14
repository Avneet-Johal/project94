const firebaseConfig = {
    apiKey: "AIzaSyCxaVnCBm3qIInuMZccCw81PpyL4fVrSVA",
    authDomain: "c94project-19613.firebaseapp.com",
    databaseURL: "https://c94project-19613-default-rtdb.firebaseio.com",
    projectId: "c94project-19613",
    storageBucket: "c94project-19613.appspot.com",
    messagingSenderId: "840505342321",
    appId: "1:840505342321:web:e83e0a837473f932d29ed0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";