let VocabData = [];
let currentTopic = "";
let topicWords = [];
let currentIndex = 0;
const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || {};

const script = document.createElement("script");
script.src = "../../data/vocab_data_snippet.js";
script.onload = () => {
  VocabData = vocabData || [];
  renderTopics();
};
script.onerror = () => {
  document.getElementById("topicButtons").innerText =
    "Không tải được chủ đề. Vui lòng Thử thách từ vựng lại file vocab_data_snippet.js.";
};
document.head.appendChild(script);

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
    '<a href="../login/login.html">Đăng nhập / Đăng ký</a>';
}

function renderTopics() {
  const container = document.getElementById("topicButtons");
  const topics = [...new Set(VocabData.map((item) => item.topic))];
  container.innerHTML = "";
  topics.forEach((topic) => {
    const btn = document.createElement("button");
    btn.innerText = topic;
    btn.onclick = () => loadTopic(topic);
    container.appendChild(btn);
  });
}

function loadTopic(topic) {
  currentTopic = topic;
  topicWords = VocabData.filter((item) => item.topic === topic);
  currentIndex = 0;
  document.getElementById("titleChoose").style.display = "none";
  document.getElementById("topicButtons").style.display = "none";
  document.getElementById("flashcardContainer").style.display = "flex";
  document.getElementById("backBtn").style.display = "block";
  renderFlashcard();
}

function renderFlashcard() {
  const card = document.getElementById("flashcard");
  const item = topicWords[currentIndex];
  card.innerHTML = `
    <div class="word">${item.word}</div>
    <div class="ipa">${item.ipa}</div>
    <div class="vn">${item.vn}</div>
    <button class="audio-btn" onclick="speak('${item.word}')">🔊</button>
  `;
}

function nextCard() {
  if (currentIndex < topicWords.length - 1) {
    currentIndex++;
    renderFlashcard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderFlashcard();
  }
}

function showTopics() {
  document.getElementById("flashcardContainer").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
  document.getElementById("topicButtons").style.display = "grid";
  document.getElementById("titleChoose").style.display = "block";
}

function speak(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}
function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
  window.location.href = "../login/login.html"
}
