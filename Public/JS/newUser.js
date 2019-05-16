$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var firstName = $("#firstName");
  var lastName = $("#lastName");
  var userName = $("#userName");
  var email = $("#email");
  var password = $("#password");
  var profliePic = $("#profliePic");

  // Adding event listeners to the form to create a new object, and the button to delete
  // an User
  $(document).on("submit", "#user-form", handleUserFormSubmit);
  // $(document).on("click", ".delete-user", handleDeleteButtonPress);

  // A function to handle what happens when the form is submitted to create a new User
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !firstName
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertUser({
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      userName: userName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      profliePic: profliePic.val().trim()
    });
  }

  // A function for creating a user. Calls getUser upon completion
  function upsertUser(userData) {
    $.post("/api/users", userData);
    // .then(getUsers);
  }

});
