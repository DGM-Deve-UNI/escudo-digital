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

// Sistema do Quiz (100% funcional)
// Atualiza o window.questions igual antes, com todas perguntas



// Supondo que window.questions já esteja definido com as duas fases, conforme antes.

function initQuiz(fase = "fase1", scoresAcumulados = { fase1: 0, fase2: 0 }) {
    console.log("Iniciando quiz...", fase);
  
    const questionEl = document.getElementById("question-text");
    const optionsEl = document.getElementById("options-container");
    const currentEl = document.getElementById("current-question");
    const progressEl = document.getElementById("progress-bar");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
  
    if (
      !questionEl ||
      !optionsEl ||
      !currentEl ||
      !progressEl ||
      !nextBtn ||
      !feedbackEl
    ) {
      console.error("Elementos do quiz não encontrados!");
      return;
    }
  
    const quizData = window.questions?.[fase] || [];
    let currentQuestion = 0;
    let score = 0;
  
    function showQuestion() {
      feedbackEl.classList.add("d-none");
      nextBtn.classList.add("d-none");
  
      const question = quizData[currentQuestion];
      if (!question) return;
  
      questionEl.textContent = question.pergunta;
      optionsEl.innerHTML = question.opcoes
        .map(
          (op, i) => `
            <button class="list-group-item list-group-item-action" 
                    data-index="${i}">
              ${op}
            </button>
          `
        )
        .join("");
  
      currentEl.textContent = currentQuestion + 1;
      progressEl.style.width = `${
        ((currentQuestion + 1) / quizData.length) * 100
      }%`;
  
      // Ativa clique nas opções
      document.querySelectorAll("#options-container button").forEach((btn) => {
        btn.addEventListener("click", function () {
          checkAnswer(parseInt(btn.getAttribute("data-index")));
        });
      });
    }
  
    function checkAnswer(selected) {
      const question = quizData[currentQuestion];
      const isCorrect = selected === question.respostaCorreta;
  
      if (isCorrect) {
        score++;
        feedbackEl.className = "alert alert-success";
        feedbackEl.textContent = "✅ Correto! " + question.explicacao;
      } else {
        feedbackEl.className = "alert alert-danger";
        feedbackEl.textContent = "❌ Errado! " + question.explicacao;
      }
  
      feedbackEl.classList.remove("d-none");
      nextBtn.classList.remove("d-none");
  
      // Desativa cliques múltiplos
      document.querySelectorAll("#options-container button").forEach((btn) => {
        btn.disabled = true;
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
  
    function showResult() {
      questionEl.textContent = `Fim da ${fase === "fase1" ? "Fase 1" : "Fase 2"}!`;
      optionsEl.innerHTML = "";
      feedbackEl.className = "alert alert-info";
      feedbackEl.classList.remove("d-none");
      feedbackEl.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas.`;
  
      nextBtn.classList.add("d-none");
  
      const resultActions = document.createElement("div");
      resultActions.className = "mt-4";
  
      const minimoParaAvancar = Math.ceil(quizData.length * 0.6); // 60%
  
      if (fase === "fase1") {
        if (score < minimoParaAvancar) {
          resultActions.innerHTML = `
            <p class="text-danger">Você precisa acertar pelo menos ${minimoParaAvancar} para avançar.</p>
            <button id="refazer-fase1" class="btn btn-warning">Refazer Fase 1</button>
          `;
          optionsEl.appendChild(resultActions);
          document.getElementById("refazer-fase1").onclick = () => initQuiz("fase1", scoresAcumulados);
        } else {
          // salva resultado fase1 e libera fase 2 + refazer
          scoresAcumulados.fase1 = score;
          resultActions.innerHTML = `
            <button id="start-fase2" class="btn btn-secondary me-2">Ir para Fase 2</button>
            <button id="refazer-fase1" class="btn btn-warning">Refazer Fase 1</button>
          `;
          optionsEl.appendChild(resultActions);
          document.getElementById("start-fase2").onclick = () => initQuiz("fase2", scoresAcumulados);
          document.getElementById("refazer-fase1").onclick = () => initQuiz("fase1", scoresAcumulados);
        }
      } else {
        // Fase 2 (final)
        if (score < minimoParaAvancar) {
          // refazer fase 2
          resultActions.innerHTML = `
            <p class="text-danger">Você precisa acertar pelo menos ${minimoParaAvancar} para concluir o quiz.</p>
            <button id="refazer-fase2" class="btn btn-warning">Refazer Fase 2</button>
          `;
          optionsEl.appendChild(resultActions);
          document.getElementById("refazer-fase2").onclick = () => initQuiz("fase2", scoresAcumulados);
        } else {
          scoresAcumulados.fase2 = score;
          // mostra modal final com resumo total das duas fases
          showFinalModal(scoresAcumulados);
        }
      }
    }
  
    // Modal simples para mostrar o resultado final com resumo das duas fases e X para fechar
    function showFinalModal(scores) {
      const totalFase1 = window.questions.fase1.length;
      const totalFase2 = window.questions.fase2.length;
  
      const modalHtml = `
        <div class="modal-backdrop" style="
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;
          z-index: 1050;
        ">
          <div class="modal-content" style="
            position: relative;
            background: white; padding: 2rem; border-radius: 8px; max-width: 450px; width: 90%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            text-align: center;
          ">
            <button id="modal-close" style="
              position: absolute; top: 10px; right: 10px;
              background: transparent; border: none; font-size: 1.5rem; cursor: pointer;
            ">×</button>
            <h3>🎉 Parabéns!</h3>
            <p>Você concluiu o quiz de segurança.</p>
            <p><strong>Fase 1:</strong> ${scores.fase1} / ${totalFase1} acertos</p>
            <p><strong>Fase 2:</strong> ${scores.fase2} / ${totalFase2} acertos</p>
            <p><strong>Total:</strong> ${scores.fase1 + scores.fase2} / ${totalFase1 + totalFase2} acertos</p>
            <button id="fechar-modal" class="btn btn-primary mt-3">Voltar à tela inicial</button>
          </div>
        </div>
      `;
  
      // Adiciona modal no body
      const modalWrapper = document.createElement("div");
      modalWrapper.innerHTML = modalHtml;
      document.body.appendChild(modalWrapper);
  
      // Eventos fechar modal
      document.getElementById("modal-close").onclick = () => {
        document.body.removeChild(modalWrapper);
      };
  
      document.getElementById("fechar-modal").onclick = () => {
        document.body.removeChild(modalWrapper);
        location.hash = "home"; // ou sua lógica para voltar a tela inicial
      };
    }
  
    // Inicia o quiz
    showQuestion();
  }
  

  
  
window.handleAnswer = function (index) {
  const question = quizData[currentQuestion];

  if (index === question.respostaCorreta) {
    document.getElementById("feedback").className = "alert alert-success";
    document.getElementById("feedback").textContent = "✅ Resposta correta!";
  } else {
    document.getElementById("feedback").className = "alert alert-danger";
    document.getElementById(
      "feedback"
    ).textContent = `❌ Errado! ${question.explicacao}`;
  }

  document.getElementById("feedback").classList.remove("d-none");
  document.getElementById("next-btn").classList.remove("d-none");

  // Desativa botões após resposta
  Array.from(document.querySelectorAll("#options-container button")).forEach(
    (btn) => {
      btn.disabled = true;
    }
  );
};
  