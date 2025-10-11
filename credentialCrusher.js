const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  e.preventDefault();
  if (username.trim() !== "" && password) {
    localStorage.setItem("Something", username);
    localStorage.setItem("Password", password);
    window.location.href = "/Instagram";
  }
});
