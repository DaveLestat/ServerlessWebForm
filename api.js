// api.js

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://9lbzv4r3hh.execute-api.us-east-1.amazonaws.com/prod/contact-us";
    var name = document.getElementById("username").value;
    var bussines = document.getElementById("bussines").value;
    var industry = document.getElementById("industry").value;
    var state = document.getElementById("state").value;
    var data = {
      name: name,
      bussines: bussines,
      industry: industry,
      state: state
    };
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
      if (response.ok) {
        alert("Thanks for contacting us, we will get back to you soon");
        document.getElementById("form").reset();
        location.reload();
      } else {
        alert("Unsuccessful");
      }
    })
    .catch(function(error) {
      alert("Unsuccessful");
    });
  }