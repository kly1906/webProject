const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || {};

if (currentUser && users[currentUser]) {
  document.getElementById("user-info").innerHTML = `
      <span>Xin chào, ${users[currentUser].fullname}</span>
      <button id="logout-btn">Đăng Xuất</button>
    `;
  document.getElementById("logout-btn").addEventListener("click", function () {
    logout();
  });
} else {
  document.getElementById("user-info").innerHTML =
    '<a href="./pages/login/login.html">Đăng nhập / Đăng ký</a>';
}
function checkLoginAndRedirect(target) {
  if (!currentUser || !users[currentUser]) {
    document.getElementById("popup").style.display = "block";
    return;
  }
  window.location.href = target;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
}
