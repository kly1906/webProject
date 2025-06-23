let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Đăng nhập" : "Đăng ký";
  document.getElementById("auth-btn").innerText = isLogin ? "Đăng nhập" : "Đăng ký";
  document.getElementById("switch-text").innerHTML = isLogin 
    ? 'Chưa có tài khoản? <span class="register-text">Đăng ký</span>' 
    : 'Đã có tài khoản? <span class="register-text">Đăng nhập</span>';
  document.querySelector(".extra").style.display = isLogin ? "none" : "block";
  document.getElementById("error").innerText = "";
}

function handleAuth() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorBox = document.getElementById("error");

  if (!username || !password) {
    errorBox.innerText = "Vui lòng nhập tên đăng nhập và mật khẩu.";
    return;
  }

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[_@.])[a-zA-Z\d_@.]{8,}$/;
  if (!passwordRegex.test(password)) {
    errorBox.innerText = "Mật khẩu phải từ 8 ký tự, gồm chữ, số và ít nhất 1 trong các ký tự: _ @ .";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (isLogin) {
    if (users[username] && users[username].password === password) {
      localStorage.setItem("currentUser", username);
      window.location.href = "../../index.html";
    } else {
      errorBox.innerText = "Sai tên đăng nhập hoặc mật khẩu.";
    }
  } else {
    if (users[username]) {
      errorBox.innerText = "Tên đăng nhập đã tồn tại.";
      return;
    }

    const fullname = document.getElementById("fullname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value.trim();

    if (!fullname || !dob || !gender || !phone) {
      errorBox.innerText = "Vui lòng điền đầy đủ thông tin cá nhân.";
      return;
    }

    if (fullname.length < 5 || !fullname.includes(" ")) {
      errorBox.innerText = "Họ tên phải có ít nhất 5 ký tự và chứa khoảng trắng.";
      return;
    }

    if (!/^0\d{9}$/.test(phone)) {
      errorBox.innerText = "Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0.";
      return;
    }

    if (!["Nam", "Nữ"].includes(gender)) {
      errorBox.innerText = "Giới tính phải là Nam hoặc Nữ.";
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (dob > today) {
      errorBox.innerText = "Ngày sinh không hợp lệ.";
      return;
    }

    users[username] = {
      password,
      fullname,
      dob,
      gender,
      phone,
      learnedWords: [],
      quizResult: null
    };

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", username);
    window.location.href = "../../index.html";
  }
}
