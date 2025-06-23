
let vocabData = [];
let currentTopic = "";
let topicWords = [];
let currentIndex = 0;

const script = document.createElement("script");
script.src = "vocab_data_snippet.js";
script.onload = () => {
  vocabData = window.vocabData || [];
  renderTopics();
};
script.onerror = () => {
  document.getElementById("topicButtons").innerText = "Không tải được chủ đề. Vui lòng kiểm tra lại file vocab_data_snippet.js.";
};
document.head.appendChild(script);

function renderTopics() {
  const container = document.getElementById("topicButtons");
  const topics = [...new Set(vocabData.map(item => item.topic))];
  container.innerHTML = "";
  topics.forEach(topic => {
    const btn = document.createElement("button");
    btn.innerText = topic;
    btn.onclick = () => loadTopic(topic);
    container.appendChild(btn);
  });
}

function loadTopic(topic) {
  currentTopic = topic;
  topicWords = vocabData.filter(item => item.topic === topic);
  currentIndex = 0;
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
  document.getElementById("topicButtons").style.display = "flex";
}

function speak(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}
