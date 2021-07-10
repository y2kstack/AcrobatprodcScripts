var email = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
if (event.value != "") {
  if (!email.test(event.value)) {
    event.rc = false;
    app.alert('"' + event.value + '" is not a valid email address.');
  }
}

// color change

if (event.value > 0) {
  //event.value = event.value*-1;
  event.target.textColor = ["RGB", 0, 0, 0];
} else {
  event.target.textColor = ["RGB", 1, 0, 0];
}
