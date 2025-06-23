$(document).ready(function () {
  let QuizData = [];
  let current = 0;
  let correctCount = 0;
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (currentUser && users[currentUser]) {
    document.getElementById(
      "user-info"
    ).innerHTML = `<span>Xin chào, ${users[currentUser].fullname}</span>`;
  } else {
    document.getElementById("user-info").innerHTML =
      '<a href="login.html">Đăng nhập / Đăng ký</a>';
  }

  // Tạo và tải script quiz_data_snippet.js
  const script = document.createElement("script");
  script.src = "../../data/quiz_data_snippet.js";
  script.onload = () => {
    if (typeof quizData !== "undefined" && Array.isArray(quizData)) {
      QuizData = quizData;
      if (QuizData.length > 0) {
        renderQuestion(current);
      } else {
        $("#question").text("Không có dữ liệu câu hỏi nào.");
      }
    } else {
      $("#question").text("Dữ liệu quiz không hợp lệ.");
    }
  };
  script.onerror = () => {
    $("#question").text(
      "Không tải được dữ liệu quiz. Vui lòng kiểm tra lại file quiz_data_snippet.js."
    );
  };
  document.head.appendChild(script);

  // Hàm render câu hỏi
  function renderQuestion(index) {
    const q = QuizData[index];
    $("#question").text(`Câu ${index + 1}: "${q.word}" nghĩa là gì?`);
    $(".answers").empty();
    q.options.forEach((option) => {
      $(".answers").append(
        `<li><button class="answer">${option}</button></li>`
      );
    });
    $(".result").text("");
    $("#next").hide();
  }

  // Xử lý chọn đáp án
  $(document).on("click", ".answer", function () {
    const selected = $(this).text();
    const correct = QuizData[current].correct;
    if (selected === correct) {
      $(".result").text("Chính xác!").css("color", "green");
      correctCount++;
    } else {
      $(".result")
        .text(`Sai rồi! Đáp án đúng là: ${correct}`)
        .css("color", "red");
    }
    $(".answer").prop("disabled", true);
    $("#next").show();
  });

  // Xử lý chuyển sang câu tiếp theo
  $("#next").click(function () {
    current++;
    if (current < QuizData.length) {
      renderQuestion(current);
    } else {
      localStorage.setItem(
        "quizResult",
        JSON.stringify({ correct: correctCount, total: QuizData.length })
      );
      $(".quiz-box").html(
        `<h3>Bạn đã hoàn thành bài kiểm tra!</h3><p>Điểm: ${correctCount}/${QuizData.length}</p>`
      );
    }
  });
});
