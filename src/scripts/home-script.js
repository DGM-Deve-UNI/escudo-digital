// Adiciona interatividade aos cards
document.addEventListener("DOMContentLoaded", function () {
  // Cards hover effect
  document.querySelectorAll(".enhanced-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Animação de contadores nas estatísticas
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const target = counter.textContent;
      let current = 0;

      if (target.includes("%")) {
        const num = parseInt(target);
        const timer = setInterval(() => {
          current += Math.ceil(num / 100);
          if (current >= num) {
            current = num;
            clearInterval(timer);
          }
          counter.textContent = current + "%";
        }, 20);
      }
    });
  }

  // Ativa animação quando a seção de stats fica visível
  const statsSection = document.querySelector(".stats-section");

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(statsSection);
  }
});
// ===========================================================
document.addEventListener("DOMContentLoaded", function () {
  // Verificação básica
  if (!window.Navbar || !window.Footer) {
    console.error("Componentes essenciais não carregados!");
    return;
  }

  renderPage();

  // Navegação SPA
  document.body.addEventListener("click", function (e) {
    const link = e.target.closest("[data-spa-link]");
    if (link) {
      e.preventDefault();
      window.location.hash = link.getAttribute("href");
      renderPage();
    }
  });

  window.addEventListener("hashchange", renderPage);
});

function renderPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const page = window.location.hash.substring(1) || "home";

  app.innerHTML = `
      ${Navbar()}
      ${getPageContent(page)}
      ${Footer()}
    `;

  // Inicializa o quiz se for a página correta
  if (page === "quiz") {
    initQuiz();
  }
}

function getPageContent(page) {
  switch (page) {
    case "quiz":
      return QuizPage ? QuizPage() : "<p>Quiz em construção</p>";
    case "saiba-mais":
      return SaibaMaisPage ? SaibaMaisPage() : "<p>Conteúdo em construção</p>";
    default:
      return HomePage();
  }
}

function initQuiz(fase = "fase1", scoresAcumulados = { fase1: 0, fase2: 0 }) {
  console.log("Iniciando quiz...", fase);

  // Elementos do DOM
  const questionEl = document.getElementById("question-text");
  const optionsEl = document.getElementById("options-container");
  const currentEl = document.getElementById("current-question");
  const totalEl = document.getElementById("total-questions");
  const progressEl = document.getElementById("progress-bar");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const currentScoreEl = document.getElementById("current-score");
  const maxScoreEl = document.getElementById("max-score");
  const streakEl = document.getElementById("streak-count");
  const accuracyEl = document.getElementById("accuracy");
  const timeLeftEl = document.getElementById("time-left");
  const categoryEl = document.getElementById("question-category");

  // Verificação de elementos
  if (
    !questionEl ||
    !optionsEl ||
    !currentEl ||
    !progressEl ||
    !nextBtn ||
    !feedbackEl ||
    !currentScoreEl ||
    !maxScoreEl ||
    !streakEl ||
    !accuracyEl ||
    !timeLeftEl ||
    !categoryEl ||
    !totalEl
  ) {
    console.error("Elementos do quiz não encontrados!");
    return;
  }

  const quizData = window.questions?.[fase] || [];
  let currentQuestion = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let answeredQuestions = 0;
  let timerInterval;
  let totalTimeSeconds = 0;
  let quizStartTime = new Date();

  // Inicializar estatísticas
  currentScoreEl.textContent = "0";
  maxScoreEl.textContent = quizData.length;
  streakEl.textContent = "0";
  accuracyEl.textContent = "0%";
  timeLeftEl.textContent = "30s";
  totalEl.textContent = quizData.length;

  function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = 30;
    timeLeftEl.textContent = timeLeft + "s";

    timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftEl.textContent = timeLeft + "s";

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    // Verifica se já foi selecionada uma resposta
    if (document.querySelector(".option-item.selected")) return;

    const question = quizData[currentQuestion];
    feedbackEl.className = "alert alert-danger";
    feedbackEl.textContent =
      "⏰ Tempo esgotado! A resposta correta foi destacada.";
    feedbackEl.classList.remove("d-none");

    // Mostrar resposta correta
    const correctOption = document.querySelector(
      `.option-item[data-index="${question.respostaCorreta}"]`
    );
    if (correctOption) {
      correctOption.classList.add("correct");
    }

    // Desativar cliques
    document.querySelectorAll(".option-item").forEach((item) => {
      item.style.pointerEvents = "none";
    });

    // Mostrar botão próximo
    nextBtn.classList.remove("d-none");
  }

  function showQuestion() {
    clearInterval(timerInterval);
    feedbackEl.classList.add("d-none");
    nextBtn.classList.add("d-none");

    const question = quizData[currentQuestion];
    if (!question) return;

    // Atualizar elementos
    questionEl.textContent = question.pergunta;
    categoryEl.textContent = question.categoria || "Segurança Digital";

    // Gerar opções
    optionsEl.innerHTML = question.opcoes
      .map(
        (op, i) => `
          <div class="option-item" data-index="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${op}</span>
          </div>
        `
      )
      .join("");

    // Atualizar progresso
    currentEl.textContent = currentQuestion + 1;
    progressEl.style.width = `${
      ((currentQuestion + 1) / quizData.length) * 100
    }%`;

    // Adicionar eventos às opções
    document.querySelectorAll(".option-item").forEach((item) => {
      item.addEventListener("click", function () {
        // Evitar múltiplas seleções
        if (document.querySelector(".option-item.selected")) return;

        // Selecionar opção atual
        this.classList.add("selected");

        // Verificar resposta após pequeno delay para efeito visual
        setTimeout(() => {
          checkAnswer(parseInt(this.getAttribute("data-index")));
        }, 300);
      });
    });

    // Iniciar timer
    startTimer();
  }

  function checkAnswer(selected) {
    clearInterval(timerInterval);

    // Calcular tempo gasto na pergunta
    const questionTime = 30 - parseInt(timeLeftEl.textContent);
    totalTimeSeconds += questionTime;

    const question = quizData[currentQuestion];
    const isCorrect = selected === question.respostaCorreta;
    answeredQuestions++;

    // Atualizar estatísticas
    if (isCorrect) {
      score++;
      streak++;
      if (streak > maxStreak) maxStreak = streak;
    } else {
      streak = 0;
    }

    const accuracy = Math.round((score / answeredQuestions) * 100);
    streakEl.textContent = streak;
    accuracyEl.textContent = `${accuracy}%`;
    currentScoreEl.textContent = score;

    // Marcar respostas
    document.querySelectorAll(".option-item").forEach((item, index) => {
      if (index === question.respostaCorreta) {
        item.classList.add("correct"); // Resposta correta (verde)
      } else if (index === selected && !isCorrect) {
        item.classList.add("incorrect"); // Resposta errada do usuário (vermelho)
      }
    });

    // Feedback
    if (isCorrect) {
      feedbackEl.className = "alert alert-success";
      feedbackEl.textContent = "✅ Correto! " + question.explicacao;
    } else {
      feedbackEl.className = "alert alert-danger";
      feedbackEl.textContent = "❌ Errado! " + question.explicacao;
    }

    feedbackEl.classList.remove("d-none");
    nextBtn.classList.remove("d-none");

    // Desativar cliques
    document.querySelectorAll(".option-item").forEach((item) => {
      item.style.pointerEvents = "none";
    });
  }

  nextBtn.onclick = function () {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  };

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  }

  function showResult() {
    clearInterval(timerInterval);

    // Calcular tempo total
    const totalTime = formatTime(totalTimeSeconds);

    questionEl.textContent = `Fim da ${
      fase === "fase1" ? "Fase 1" : "Fase 2"
    }!`;
    optionsEl.innerHTML = "";
    feedbackEl.className = "alert alert-info";
    feedbackEl.classList.remove("d-none");
    feedbackEl.innerHTML = `
      <div class="text-center">
        <h4>Resultado Final</h4>
        <p>Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas</p>
        <p>Tempo total: <strong>${totalTime}</strong></p>
      </div>
    `;

    nextBtn.classList.add("d-none");

    const resultActions = document.createElement("div");
    resultActions.className = "mt-4 text-center";

    const minimoParaAvancar = Math.ceil(quizData.length * 0.6); // 60%

    if (fase === "fase1") {
      if (score < minimoParaAvancar) {
        resultActions.innerHTML = `
          <p class="text-danger">Você precisa acertar pelo menos ${minimoParaAvancar} para avançar.</p>
          <button id="refazer-fase1" class="btn btn-warning">Refazer Fase 1</button>
        `;
        optionsEl.appendChild(resultActions);
        document.getElementById("refazer-fase1").onclick = () =>
          initQuiz("fase1", scoresAcumulados);
      } else {
        scoresAcumulados.fase1 = score;
        resultActions.innerHTML = `
          <button id="start-fase2" class="btn btn-primary me-2">Ir para Fase 2</button>
          <button id="refazer-fase1" class="btn btn-outline-secondary">Refazer Fase 1</button>
        `;
        optionsEl.appendChild(resultActions);
        document.getElementById("start-fase2").onclick = () =>
          initQuiz("fase2", scoresAcumulados);
        document.getElementById("refazer-fase1").onclick = () =>
          initQuiz("fase1", scoresAcumulados);
      }
    } else {
      if (score < minimoParaAvancar) {
        resultActions.innerHTML = `
          <p class="text-danger">Você precisa acertar pelo menos ${minimoParaAvancar} para concluir o quiz.</p>
          <button id="refazer-fase2" class="btn btn-warning">Refazer Fase 2</button>
        `;
        optionsEl.appendChild(resultActions);
        document.getElementById("refazer-fase2").onclick = () =>
          initQuiz("fase2", scoresAcumulados);
      } else {
        scoresAcumulados.fase2 = score;
        showFinalModal(scoresAcumulados, totalTimeSeconds);
      }
    }
  }

  function showFinalModal(scores, totalSeconds) {
    const totalFase1 = window.questions.fase1.length;
    const totalFase2 = window.questions.fase2.length;
    const totalAcertos = scores.fase1 + scores.fase2;
    const totalPerguntas = totalFase1 + totalFase2;
    const percentual = Math.round((totalAcertos / totalPerguntas) * 100);
    const totalTimeFormatted = formatTime(totalSeconds);

    const modalHtml = `
      <div class="modal-backdrop" style="
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center;
        z-index: 1050; backdrop-filter: blur(5px);
      ">
        <div class="modal-content bg-white rounded-4 p-4" style="
          max-width: 500px; width: 90%; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        ">
          <div class="text-end">
            <button id="modal-close" class="btn-close"></button>
          </div>
          
          <div class="text-center p-3">
            <div class="mb-4">
              <div class="d-flex justify-content-center mb-3">
                <div class="trophy-circle bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="fas fa-trophy fa-2x text-white"></i>
                </div>
              </div>
              <h3 class="fw-bold">🎉 Parabéns!</h3>
              <p class="text-muted">Você concluiu o quiz de segurança digital</p>
            </div>
            
            <div class="results-summary mb-4">
              <div class="d-flex justify-content-around mb-3">
                <div>
                  <div class="fw-bold text-primary">${percentual}%</div>
                  <div class="small">Desempenho</div>
                </div>
                <div>
                  <div class="fw-bold text-primary">${maxStreak}</div>
                  <div class="small">Sequência máxima</div>
                </div>
                <div>
                  <div class="fw-bold text-primary">${totalTimeFormatted}</div>
                  <div class="small">Tempo total</div>
                </div>
              </div>
              
              <div class="result-item mb-2 p-2 bg-light rounded">
                <div class="d-flex justify-content-between">
                  <span>Fase 1:</span>
                  <span><strong>${scores.fase1}</strong>/${totalFase1}</span>
                </div>
                <div class="progress mt-1" style="height: 8px;">
                  <div class="progress-bar" style="width: ${
                    (scores.fase1 / totalFase1) * 100
                  }%"></div>
                </div>
              </div>
              
              <div class="result-item mb-2 p-2 bg-light rounded">
                <div class="d-flex justify-content-between">
                  <span>Fase 2:</span>
                  <span><strong>${scores.fase2}</strong>/${totalFase2}</span>
                </div>
                <div class="progress mt-1" style="height: 8px;">
                  <div class="progress-bar" style="width: ${
                    (scores.fase2 / totalFase2) * 100
                  }%"></div>
                </div>
              </div>
              
              <div class="result-item p-2 bg-primary text-white rounded">
                <div class="d-flex justify-content-between">
                  <span>Total:</span>
                  <span><strong>${totalAcertos}</strong>/${totalPerguntas}</span>
                </div>
              </div>
            </div>
            
            <button id="fechar-modal" class="btn btn-primary w-100 py-2 fw-bold">
              Voltar à tela inicial
            </button>
          </div>
        </div>
      </div>
    `;

    const modalWrapper = document.createElement("div");
    modalWrapper.innerHTML = modalHtml;
    document.body.appendChild(modalWrapper);

    // Fechar modal
    document.getElementById("modal-close").onclick = () => {
      document.body.removeChild(modalWrapper);
    };

    document.getElementById("fechar-modal").onclick = () => {
      document.body.removeChild(modalWrapper);
      location.hash = "home";
    };
  }

  // Iniciar quiz
  showQuestion();
}