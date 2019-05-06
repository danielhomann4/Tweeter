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

  // Getting the initial list of Users
  // getUsers();

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

  // Function for retrieving authors and getting them ready to be rendered to the page
  // function getUsers() {
  //   $.get("/api/users", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(createAuthorRow(data[i]));
  //     }
  //     renderAuthorList(rowsToAdd);
  //     nameInput.val("");
  //   });
  // }

  // A function for rendering the list of authors to the page
  // function renderAuthorList(rows) {
  //   authorList.children().not(":last").remove();
  //   authorContainer.children(".alert").remove();
  //   if (rows.length) {
  //     console.log(rows);
  //     authorList.prepend(rows);
  //   }
  //   else {
  //     renderEmpty();
  //   }
  // }

  // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }

  // Function for handling what happens when the delete button is pressed
  // function handleDeleteButtonPress() {
  //   var listItemData = $(this).parent("td").parent("tr").data("author");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/authors/" + id
  //   })
  //     .then(getAuthors);
  // }
});
