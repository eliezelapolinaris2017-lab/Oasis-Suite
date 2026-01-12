const btn = document.getElementById("logoutBtn");
if (btn) {
  btn.addEventListener("click", async () => {
    await auth.signOut();
    location.href = "/auth/";
  });
}
