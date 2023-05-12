function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("POST", "http://localhost:8000/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Data received successfully:", xhr.response);
    //   windows.location("http://10.12.47.127:5500/Puzzlio%20Elitmus/index.html");
      window.location.replace(
        "http://10.12.47.127:5500/Puzzlio%20Elitmus/index.html"
      );
      // Do something with the response...
    } else {
      console.error("Request failed:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed:", xhr.statusText);
  };
  xhr.send(
    JSON.stringify({ email: email, password: password })
  );
}

const formElement = document.getElementById("my-form");
formElement.addEventListener("submit", handleFormSubmit);
