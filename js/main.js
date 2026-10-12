// ---------- Login page ----------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePw = document.getElementById("togglePw");

  togglePw.addEventListener("click", () => {
    const hidden = password.type === "password";
    password.type = hidden ? "text" : "password";
    togglePw.textContent = hidden ? "Hide" : "Show";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const passOk = password.value.length >= 6;

    email.classList.toggle("is-invalid", !emailOk);
    password.classList.toggle("is-invalid", !passOk);
    if (!emailOk || !passOk) return;

    alert("Login successful!");
    window.location.href = "home.html";
  });
}

// ---------- Home page: course modal ----------
const courseModalEl = document.getElementById("courseModal");
if (courseModalEl) {
  const modal = new bootstrap.Modal(courseModalEl);
  document.querySelectorAll(".learn-more").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("modalCourseTitle").textContent = btn.dataset.title;
      document.getElementById("modalCourseDesc").textContent = btn.dataset.desc;
      modal.show();
    });
  });
}
