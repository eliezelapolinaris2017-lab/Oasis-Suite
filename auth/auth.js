const form = document.getElementById("loginForm");
const err = document.getElementById("err");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  err.textContent = "";

  try {
    await auth.signInWithEmailAndPassword(
      document.getElementById("email").value.trim(),
      document.getElementById("password").value
    );
    location.href = "/";
  } catch (e) {
    err.textContent = "Acceso denegado. Verifica email y contraseña.";
    console.error(e);
  }
});
