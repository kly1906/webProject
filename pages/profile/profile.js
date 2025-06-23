$(document).ready(function () {
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};
  console.log(users);

  if (currentUser && users[currentUser]) {
    document.getElementById("user-info").innerHTML = `
      <span>Xin chào, ${users[currentUser].fullname}</span>
      <button id="logout-btn">Đăng Xuất</button>
    `;
    document
      .getElementById("logout-btn")
      .addEventListener("click", function () {
        logout();
      });
  } else {
    document.getElementById("user-info").innerHTML =
      '<a href="../login/login.html">Đăng nhập / Đăng ký</a>';
  }
  if (currentUser && users[currentUser]) {
    $("#profile-info").html(`
      <p><strong>Họ và tên:</strong> ${users[currentUser].fullname}</p>
      <p><strong>Số điện thoại:</strong> ${users[currentUser].phone}</p>
            <p><strong>Ngày sinh:</strong> ${users[currentUser].dob}</p>

    `);
  } else {
    $("#profile-info").html(`
      <p>Vui lòng <a href="login.html">đăng nhập</a> để xem thông tin cá nhân.</p>
    `);
  }

  const quizResult = JSON.parse(localStorage.getItem("quizResult"));
  if (quizResult) {
    $("#quiz-history").html(`
      <p><strong>Kết quả gần nhất:</strong></p>
      <p>Điểm: ${quizResult.correct}/${quizResult.total}</p>
      <p>Tỷ lệ đúng: ${((quizResult.correct / quizResult.total) * 100).toFixed(
        2
      )}%</p>
    `);
  } else {
    $("#quiz-history").html(`
      <p>Chưa có kết quả Thử thách từ vựng nào.</p>
    `);
  }
function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
  window.location.href = "../login/login.html"
}

});
