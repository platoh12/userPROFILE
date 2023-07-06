// User profile JavaScript code

// Function to handle edit profile functionality
function editProfile() {
 var nameElement = document.querySelector(".personal-details span:nth-child(1)");
 var emailElement = document.querySelector(".personal-details span:nth-child(2)");
 var phoneElement = document.querySelector(".personal-details span:nth-child(3)");

 var newName = prompt("Enter your new name:");
 var newEmail = prompt("Enter your new email:");
 var newPhone = prompt("Enter your new phone number:");

 if (newName) {
   nameElement.textContent = newName;
 }
 if (newEmail) {
   emailElement.textContent = newEmail;
 }
 if (newPhone) {
   phoneElement.textContent = newPhone;
 }
}

// Function to handle change password functionality
function changePassword() {
 var currentPassword = prompt("Enter your current password:");

 // Assuming you have a function to check the current password validity
 if (checkCurrentPassword(currentPassword)) {
   var newPassword = prompt("Enter your new password:");

   // Assuming you have a function to update the password
   if (newPassword) {
     updatePassword(newPassword);
     alert("Password changed successfully!");
   }
 } else {
   alert("Invalid current password!");
 }
}

// Function to handle log out functionality
function logOut() {
 // Assuming you have a function to clear the user session or perform any necessary actions before logging out
 clearUserSession();

 // Redirect the user to the login page
 window.location.href = "login.html";
}

// Function to handle saving a property
function saveProperty(propertyId) {
 // Code to save the property with the given propertyId to the user's saved properties
 // ...
}

// Function to handle removing a saved property
function removeSavedProperty(propertyId) {
 // Code to remove the saved property with the given propertyId from the user's saved properties
 // ...
}

// Function to handle displaying booking history
function displayBookingHistory() {
 var bookingHistoryElement = document.querySelector(".booking-history ul");

 // Assuming you have a function to fetch the booking history data from the server or local storage
 var bookingHistory = getBookingHistory();

 // Clear the existing booking history
 bookingHistoryElement.innerHTML = "";

 if (bookingHistory.length === 0) {
   var emptyMessage = document.createElement("li");
   emptyMessage.textContent = "No booking history available.";
   bookingHistoryElement.appendChild(emptyMessage);
 } else {
   bookingHistory.forEach(function (booking) {
     var listItem = createBookingHistoryItem(booking);
     bookingHistoryElement.appendChild(listItem);
   });
 }
}

// Function to create a booking history item element
function createBookingHistoryItem(booking) {
 var listItem = document.createElement("li");

 var bookingDetails = document.createElement("div");
 bookingDetails.classList.add("booking-details");

 var propertyName = document.createElement("h3");
 propertyName.textContent = booking.propertyName;
 bookingDetails.appendChild(propertyName);

 var bookingDate = document.createElement("p");
 bookingDate.textContent = "Date: " + booking.date;
 bookingDetails.appendChild(bookingDate);

 var bookingStatus = document.createElement("p");
 bookingStatus.textContent = "Status: " + booking.status;
 bookingDetails.appendChild(bookingStatus);

 listItem.appendChild(bookingDetails);

 if (booking.rating || booking.review) {
   var ratingReviews = document.createElement("div");
   ratingReviews.classList.add("rating-reviews");

   if (booking.rating) {
     var rating = document.createElement("p");
     rating.textContent = "Rating: " + booking.rating;
     ratingReviews.appendChild(rating);
   }

   if (booking.review) {
     var review = document.createElement("p");
     review.textContent = "Review: " + booking.review;
     ratingReviews.appendChild(review);
   }

   listItem.appendChild(ratingReviews);
 }

 return listItem;
}

// Get the edit profile button and attach an event listener
var editProfileButton = document.querySelector(".btn-edit-profile");
editProfileButton.addEventListener("click", editProfile);

// Get the change password button and attach an event listener
var changePasswordButton = document.querySelector(".btn-change-password");
changePasswordButton.addEventListener("click", changePassword);

// Get the log out button and attach an event listener
var logOutButton = document.querySelector(".btn-log-out");
logOutButton.addEventListener("click", logOut);

// Get all save buttons and attach event listeners
var saveButtons = document.querySelectorAll(".save-button");
saveButtons.forEach(function (saveButton) {
 saveButton.addEventListener("click", function () {
   var propertyId = saveButton.dataset.propertyId;
   saveProperty(propertyId);
   saveButton.textContent = "Saved";
   saveButton.disabled = true;
 });
});

// Get all remove buttons and attach event listeners
var removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach(function (removeButton) {
 removeButton.addEventListener("click", function () {
   var propertyId = removeButton.dataset.propertyId;
   removeSavedProperty(propertyId);
   var saveButton = document.querySelector('.save-button[data-property-id="' + propertyId + '"]');
   saveButton.textContent = "Save";
   saveButton.disabled = false;
 });
});

// Call the function to display the booking history
displayBookingHistory();

// Example helper functions

function checkCurrentPassword(password) {
 // Code to check if the entered password matches the current password
 // Return true if the password is valid, false otherwise
 // ...
}

function updatePassword(newPassword) {
 // Code to update the user's password with the new password
 // ...
}

function clearUserSession() {
 // Code to clear the user's session or perform any necessary actions before logging out
 // ...
}

function getBookingHistory() {
 // Code to retrieve the user's booking history from the server or local storage
 // Return the booking history data as an array
 // ...
}

// Additional helper functions can be added as needed
