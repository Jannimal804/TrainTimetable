

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4zwNZFr-mVa4rMjD3zB-tuovD_zIqbiE",
    authDomain: "traintimetable-55e4b.firebaseapp.com",
    databaseURL: "https://traintimetable-55e4b.firebaseio.com",
    projectId: "traintimetable-55e4b",
    storageBucket: "",
    messagingSenderId: "532623699560"
  };

  firebase.initializeApp(config);

  //accepting form input and push to firebase 
  //pull form from firebase and push to timetable 

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainStart = $("#start-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();

  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      start: trainStart,
      frequency: trainFrequency
    };

 // Uploads employee data to the database
 database.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.name);
 console.log(newTrain.destination);
 console.log(newTrain.start);
 console.log(newTrain.frequency);

 alert("Employee successfully added");

 // Clears all of the text-boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#start-input").val("");
 $("#frequency-input").val("");
});


