$(document).ready(function () {
  let QuizData = [];
  let current = 0;
  let correctCount = 0;
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

  $("#question, .answers, .result, #next").hide();
  $("#start").show();

  function getRandomQuestions(data, count) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const script = document.createElement("script");
  script.src = "../../data/quiz_data_snippet.js";
  script.onload = () => {
    if (typeof quizData !== "undefined" && Array.isArray(quizData)) {
      QuizData = getRandomQuestions(quizData, 10); 
    } else {
      $("#question").text("Dữ liệu quiz không hợp lệ.").show();
      $("#start").hide();
    }
  };
  script.onerror = () => {
    $("#question")
      .text(
        "Không tải được dữ liệu quiz. Vui lòng Thử thách từ vựng lại file quiz_data_snippet.js."
      )
      .show();
    $("#start").hide();
  };
  document.head.appendChild(script);

  $("#start").click(function () {
    if (QuizData.length > 0) {
      $("#start").hide();
      $("#question, .answers, .result, #next").show();
      renderQuestion(current);
    } else {
      $("#question").text("Không có dữ liệu câu hỏi nào.").show();
      $("#start").hide();
    }
  });

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

  $(document).on("click", ".answer", function () {
    const selected = $(this).text();
    const correct = QuizData[current].correct;
    $(".answer").prop("disabled", true);
    if (selected === correct) {
      $(this).css("background-color", "#4CAF50");
      $(this).css("scale", "1.03");
      $(".result").text("Chính xác!").css("color", "green");
      correctCount++;
    } else {
      $(this).css("background-color", "#f44336");
      $(this).css("scale", "1.03");

      $(".result")
        .text(`Sai rồi! Đáp án đúng là: ${correct}`)
        .css("color", "red");
      $(".answer").each(function () {
        if ($(this).text() === correct) {
          $(this).css("background-color", "#4CAF50");
          $(this).css("scale", "1.05");
        }
      });
    }
    $("#next").show();
  });

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
        `<h3>Bạn đã hoàn thành Thử thách từ vựng!</h3>
         <p>Điểm: ${correctCount}/${QuizData.length}</p>
         <p>Tỷ lệ đúng: ${((correctCount / QuizData.length) * 100).toFixed(
           2
         )}%</p>
         <button id="restart">Làm lại Thử thách từ vựng</button>`
      );
    }
  });

  $(document).on("click", "#restart", function () {
    QuizData = getRandomQuestions(quizData, 10);
    current = 0;
    correctCount = 0;
    $(".quiz-box").empty().append(`
      <h3 id="question"></h3>
      <ul class="answers"></ul>
      <p class="result"></p>
      <button id="start">Bắt đầu</button>
      <button id="next">Câu tiếp theo</button>
    `);
    $("#question, .answers, .result, #next").hide();
    $("#start").show();
  });
});
