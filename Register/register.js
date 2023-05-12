function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  console.log(xhr)
  xhr.open("POST", "http://localhost:8000/register");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Data received successfully:", xhr.response);
      // Do something with the response...
      window.location.replace(
        "http://10.12.47.127:5500/Puzzlio%20Elitmus/Login/Login.html"
      );
    } else {
      console.error("Request failed:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed:", xhr.statusText);
  };
  xhr.send(JSON.stringify({ name: username,email:email,password:password }));
}

const formElement = document.getElementById("my-form");
formElement.addEventListener("submit", handleFormSubmit);
