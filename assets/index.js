const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || {};

if (currentUser && users[currentUser]) {
  document.getElementById("user-info").innerHTML = `
      <span>Xin chào, ${users[currentUser].fullname}</span>
      <button id="logout-btn">Đăng Xuất</button>
    `;
  $("#logout-btn").click(function () {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
} else {
  document.getElementById("user-info").innerHTML =
    '<a href="login.html">Đăng nhập / Đăng ký</a>';
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
