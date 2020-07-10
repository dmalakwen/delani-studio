//    what we do section
$(".main").click(function () {
  $(this).children(".hide").slideToggle(1200);
  $(this).children(".show").toggle(1500);
});

// giving feedback to the customer
$("button").click(function (omonge) {
  var client = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  // Defining error variables with a default value
  var nameErr = true;
  var emailErr = true;
  var messageErr = true;
  var alertMsg = "Please complete the following fields:\n";
  // Validate name
  if (client == "") {
    alertMsg += " - " + "Name\n";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(client) === false) {
      alertMsg += " - " + " Valid name\n";
    } else {
      nameErr = false;
    }
  }
  // Validate name
  if (email == "") {
    alertMsg += " - " + " Email\n";
  } else {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email) === false) {
      alertMsg += " - " + " Valid email\n";
    } else {
      emailErr = false;
    }
  }
  // Validate message
  if (message == "") {
    alertMsg += " - " + " Message\n";
  } else {
    messageErr = false;
  }
  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || messageErr) == true) {
    alert(alertMsg);
    return false;
  } else {
    alert(
      " Dear " +
        client +
        " we have received your message successful. " +
        " Feel free to reach out to us anytime"
    );
    this.reset();
  }

  omonge.preventDefault();
});
// //    reset my form button
// $("button").on("click", function () {
//   $("form").each(function () {
//     this.reset();
//   });
// });
//portifolio section
$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});

// function ValidateEmail(mail)
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
