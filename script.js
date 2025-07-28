document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  // You can change this to any fun password
  if (name === "dummy duck" && password === "my love") {
    localStorage.setItem("username", name);
    window.location.href = "pages/welcome.html";
  } else {
    document.getElementById("error").textContent = "Wrong! Try again, baka 😝";
  }
});