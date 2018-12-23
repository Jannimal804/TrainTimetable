
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
    var empDestination = $("#destination-input").val().trim();
    var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var empFrequency = $("#frequency-input").val().trim();

  
    // Creates local "temporary" object for holding employee data
    var newEmp = {
      name: trainName,
      destination: empDestination,
      start: empStart,
      frequency: empFrequency
    };

 // Uploads employee data to the database
 database.ref().push(newEmp);

 // Logs everything to console
 console.log(newEmp.name);
 console.log(newEmp.destination);
 console.log(newEmp.start);
 console.log(newEmp.frequency);

 alert("Employee successfully added");

 // Clears all of the text-boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#start-input").val("");
 $("#frequency-input").val("");
});


