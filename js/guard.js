auth.onAuthStateChanged((user) => {
  const isAuthPage = location.pathname.startsWith("/auth/");
  if (!user && !isAuthPage) {
    location.href = "/auth/";
  }
  if (user && isAuthPage) {
    location.href = "/";
  }
});
