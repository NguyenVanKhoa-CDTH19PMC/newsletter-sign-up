window.onload = function () {
  document.getElementById("email").style.setProperty("--abc","hsl(231, 7%, 60%)");
    let subForm = document.getElementById("sub-form");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
subForm.addEventListener("submit", (e) => {
  e.preventDefault();//acction in HTML

    let email = document.getElementById("email");

  if (email.value == ""||!email.value.match(mailformat)) {
      document.getElementById("error").innerHTML = "Vailed email required";
      email.style.borderColor = "red";
      email.style.backgroundColor = "rgba(255, 0, 0, 0.084)"; 
      email.style.setProperty("--abc","red");
      
    }
  else {
      window.location="/success.html";
    }
}
);
}