// Initialize Firebase
var config = {
  apiKey: "AIzaSyASzgtStABeTugbYGDLmZrAAXM-VREN944",
  authDomain: "employee-data-management-31ec4.firebaseapp.com",
  databaseURL: "https://employee-data-management-31ec4.firebaseio.com",
  projectId: "employee-data-management-31ec4",
  storageBucket: "employee-data-management-31ec4.appspot.com",
  messagingSenderId: "838084561388"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#addButton").on("click", function(event) {
	event.preventDefault();
	
	var name = $("#name-input").val().trim();
	var role = $("#role-input").val().trim();
	var startDate = $("#start-date-input").val().trim();
	var monthlyRate = $("#monthly-rate-input").val().trim();

	console.log(name, role, startDate, monthlyRate);

	var objectToPush = {
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	}

	database.ref().push(objectToPush);
	// Dynamically create the rows
});

