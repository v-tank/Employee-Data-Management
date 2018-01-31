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

	$("#name-input").val("");
	$("#role-input").val("");
	$("#start-date-input").val("");
	$("#monthly-rate-input").val("");
	// Dynamically create the rows
});

database.ref().on("child_added", function(snapshot) {
	console.log(snapshot);

	var retrievedName = snapshot.val().name;
	var retrievedRole = snapshot.val().role;
	var retrievedStartDate = snapshot.val().startDate;
	var retrievedMonthlyRate = snapshot.val().monthlyRate;
	console.log("Retrieved date is: " + retrievedStartDate);
	var formattedDate = moment(retrievedStartDate).format("MM-DD-YY");
	var monthsWorked = moment().diff(formattedDate, 'months');

	console.log("Formatted date: " + formattedDate);
	console.log("Months worked: " + monthsWorked);

	var billedDollars = monthsWorked * retrievedMonthlyRate;

	var newRow = $("<tr><td>" + retrievedName + "</td><td>" + retrievedRole + "</td><td>" + retrievedStartDate + "</td><td>" + monthsWorked + "</td><td>" + retrievedMonthlyRate + "</td><td>" + billedDollars + "</td></tr>");

	$("#employee-table").append(newRow);
});