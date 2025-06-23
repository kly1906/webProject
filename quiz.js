$(document).ready(function () {
  const questions = [
    { word: "Apple", options: ["Quả chuối", "Quả táo", "Quả cam", "Quả dưa hấu"], correct: "Quả táo" },
    { word: "Book", options: ["Cái bút", "Quyển sách", "Cái bàn", "Cái ghế"], correct: "Quyển sách" },
    { word: "Dog", options: ["Con mèo", "Con gà", "Con chó", "Con cá"], correct: "Con chó" }
  ];

  let current = 0;
  let correctCount = 0;

  function renderQuestion(index) {
    const q = questions[index];
    $("#question").text(`Câu ${index + 1}: "${q.word}" nghĩa là gì?`);
    $(".answers").empty();
    q.options.forEach(option => {
      $(".answers").append(`<li><button class="answer">${option}</button></li>`);
    });
    $(".result").text("");
    $("#next").hide();
  }

  renderQuestion(current);

  $(document).on("click", ".answer", function () {
    const selected = $(this).text();
    const correct = questions[current].correct;
    if (selected === correct) {
      $(".result").text("Chính xác!").css("color", "green");
      correctCount++;
    } else {
      $(".result").text(`Sai rồi! Đáp án đúng là: ${correct}`).css("color", "red");
    }
    $(".answer").prop("disabled", true);
    $("#next").show();
  });

  $("#next").click(function () {
    current++;
    if (current < questions.length) {
      renderQuestion(current);
    } else {
      localStorage.setItem("quizResult", JSON.stringify({ correct: correctCount, total: questions.length }));
      $(".quiz-box").html(`<h3>Bạn đã hoàn thành bài kiểm tra!</h3><p>Điểm: ${correctCount}/${questions.length}</p>`);
    }
  });
});
